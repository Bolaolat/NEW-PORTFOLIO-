export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <p className="text-gray-400">
          © {new Date().getFullYear()} BLUEDEMON. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

