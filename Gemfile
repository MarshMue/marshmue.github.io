source "https://rubygems.org"

# Core Jekyll gem - pinned to version compatible with GitHub Pages
gem "jekyll", "~> 4.3.0"

# Essential Jekyll plugins for better site functionality
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"      # Generates RSS/Atom feeds automatically  
  gem "jekyll-sitemap"              # Creates XML sitemap for search engines
  gem "jekyll-seo-tag"              # Adds meta tags for better SEO
end

# Platform-specific gems for Windows/JRuby compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for file watching on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock HTTP parser for JRuby compatibility
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]