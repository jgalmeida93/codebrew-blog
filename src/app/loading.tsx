export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background-light dark:bg-background-dark">
      <div className="relative w-16 h-16">
        <div className="absolute w-16 h-16 border-4 border-accent-primary rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute w-16 h-16 border-4 border-accent-secondary rounded-full animate-pulse opacity-50"></div>
      </div>
    </div>
  );
}
