"use client";

export default function InfoBar() {
  const message =
    "🎉 Win $500! Enter by writing a dish review to help others. Drawing 8/1.";

  return (
    <div className="bg-yellow-50 text-yellow-800 border-b border-yellow-200 text-sm text-center px-4 py-2 font-medium">
      {message}
    </div>
  );
}
