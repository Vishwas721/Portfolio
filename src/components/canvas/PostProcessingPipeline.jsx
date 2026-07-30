import React, { forwardRef, useMemo } from 'react';
import { EffectComposer } from '@react-three/postprocessing';
import { Effect } from 'postprocessing';
import { Uniform } from 'three';

// --------------------------------------------------------
// GLSL Fragment Shader: Lens Bulge + 1-Bit Halftone Dither
// --------------------------------------------------------
const fragmentShader = `
uniform float uBulgeStrength;
uniform float uBulgeRadius;
uniform float uDotSize;

// The mainImage signature is mandated by the postprocessing library framework
void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    
    // 1. Calculate Optical Lens Bulge (Fisheye/Magnifier effect)
    vec2 center = vec2(0.5);
    vec2 delta = uv - center;
    float dist = length(delta);
    
    // Gaussian falloff creates a localized central bulge without warping the screen edges
    float bulge = exp(-dist * dist * uBulgeRadius) * uBulgeStrength;
    vec2 distortedUv = uv - delta * bulge;

    // Fetch the underlying 3D scene color using the newly distorted UV coordinates
    vec4 texColor = texture2D(inputBuffer, distortedUv);
    
    // 2. Calculate Luminance
    // Utilize standard perceptual luminance coefficients to determine pixel brightness
    float luma = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
    
    // 3. Generate Screen-Space Halftone Pattern
    // Utilizing gl_FragCoord guarantees the halftone dots don't scale or warp with the 3D geometry
    vec2 coord = gl_FragCoord.xy / uDotSize;
    
    // An ordered sine matrix creates classic round halftone dots similar to CMYK printing
    float pattern = (sin(coord.x) * sin(coord.y)) * 0.5 + 0.5;
    
    // 4. 1-Bit Clamping (Strict Black & White)
    // The step function acts as a threshold, rendering white if luma > pattern, else black.
    // We adjust the luma contrast bias slightly to ensure crisp letterforms.
    float finalColor = step(pattern, luma * 1.1 - 0.05);

    // Map the binary output back to an RGBA vector
    outputColor = vec4(vec3(finalColor), 1.0);
}
`;

// --------------------------------------------------------
// Custom Effect Class Implementation
// --------------------------------------------------------
class HalftoneLensEffectImpl extends Effect {
  constructor({ bulgeStrength = 0.8, bulgeRadius = 10.0, dotSize = 3.5 } = {}) {
    // Call super with the effect name, shader, and uniform map
    super('HalftoneLensEffect', fragmentShader, {
      uniforms: new Map([
        ['uBulgeStrength', new Uniform(bulgeStrength)],
        ['uBulgeRadius', new Uniform(bulgeRadius)],
        ['uDotSize', new Uniform(dotSize)],
      ]),
    });
  }

  // Expose a method to allow React runtime updates to uniforms without rebuilding the shader
  updateUniforms(props) {
    if (props.bulgeStrength !== undefined) this.uniforms.get('uBulgeStrength').value = props.bulgeStrength;
    if (props.bulgeRadius !== undefined) this.uniforms.get('uBulgeRadius').value = props.bulgeRadius;
    if (props.dotSize !== undefined) this.uniforms.get('uDotSize').value = props.dotSize;
  }
}

// --------------------------------------------------------
// React Three Fiber Wrapper
// --------------------------------------------------------
const HalftoneLensEffect = forwardRef((props, ref) => {
  // Instantiate the effect class once
  const effect = useMemo(() => new HalftoneLensEffectImpl(props), []);
  
  // Re-sync uniforms if React state changes, ensuring smooth parameter tweening
  useMemo(() => effect.updateUniforms(props), [effect, props]);

  return <primitive ref={ref} object={effect} dispose={null} />;
});

// --------------------------------------------------------
// Pipeline Export
// --------------------------------------------------------
export default function PostProcessingPipeline() {
  return (
    // Multisampling is disabled to save massive GPU overhead.
    // Antialiasing is mathematically irrelevant due to the shader's 1-bit binary output clamping.
    <EffectComposer multisampling={0} disableNormalPass>
      <HalftoneLensEffect 
        bulgeStrength={0.75} 
        bulgeRadius={8.0} 
        dotSize={3.0} 
      />
    </EffectComposer>
  );
}