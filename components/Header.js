const Header = () => {
  return (
    <div>
      <nav class="relative container mx-auto p-6">
        <div class="flex items-center justify-between">
          <div>
            <img src="./logo1.svg" alt="logo_sport" class="pb-6" />
          </div>
          <div class="hidden md:flex space-x-12">
            <a href="#" class="hover:text-orange-300">
              News
            </a>
            <a href="#" class="hover:text-orange-300">
              Sports List
            </a>
            <a href="#" class="hover:text-orange-300">
              Gallery
            </a>
            <a href="#" class="hover:text-orange-300">
              Community
            </a>
          </div>

          <a
            href=""
            class="hidden md:block p-3 px-6 pt-2 text-white bg-amber-700 rounded-full baseline hover:bg-yellow-600"
          >
            Get Started
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
