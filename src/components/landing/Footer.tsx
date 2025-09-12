const Footer = () => {
  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto text-center text-gray-500 px-4 md:px-6">
        <p>&copy; {new Date().getFullYear()} Artificialyze. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;