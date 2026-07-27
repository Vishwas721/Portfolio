import MainLayout from "./layouts/MainLayout";
import CanvasPlaceholder from "./components/canvas/CanvasPlaceholder";

export default function App() {
  return (
    <MainLayout>
      <main className="flex h-full w-full items-center justify-center p-4 sm:p-6 lg:p-8">
        <section className="w-full max-w-5xl">
          <CanvasPlaceholder />
        </section>
      </main>
    </MainLayout>
  );
}