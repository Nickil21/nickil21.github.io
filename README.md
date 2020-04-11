# Personal Website Repository

My website is built using the following tech:

1. [Jekyll](https://jekyllrb.com/) - for generating the static pages of the site
2. [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) - the Jekyll theme for styling my site
3. [Github](https://github.com/) - for version control
4. [Disqus](https://disqus.com/) - blog comment hosting service


## Building Locally Using Ruby

This requires installing Ruby and various dependencies.

1. Install bundler: `sudo gem install bundler`. Make sure you have Ruby and Bundler versions > 2.4.

2. Clone this repository. Note that this repository uses submodules so to properly check out the submodule code, run `git submodule init` and `git submodule update` after you clone the repository. You will need the submodule to generate the schedule for the website.

3. Run the gems needed by this repository: `sudo bundle install`. 
   *Note*: This step might fail when installing the `nokogiri` gem. If this happens, run `bundle config build.nokogiri --use-system-libraries` and then run `bundle install` again.

4. Start the jekyll server by running `bundle exec jekyll serve`.

5. You can then see the website at http://localhost:4000.

## Important Files

If you fork this repository, the following files are the ones to pay attention to in order to create content for the website:

- `_pages/xxx.md` : The markdown files contain the main contents of the different web pages of the website. Please note that
  once you fork, you would need to move the already existing .md files out into a different folder so that old pages do not
  get rendered into the new website.

- `_sass/minimal-mistakes/*.scss` : SASS files that control the look and the feel of the website. The file `_program.scss` is not part of the them and controls the look and feel of the web schedule page.

- `_data/navigation.xml` : YAML file that contains the links in the masthead at the top of the website and also links in the various sidebars. 

- `_config.yml` : YAML file that contains meta-information about the website that should be set properly for a new conference. Details are given in the comments in the file. You must edit this file properly before making the website public.

- `_posts/*.md` : If you are going to have a blog, this where the blog posts live and are named `YYYY-MM-DD-title.md`. Same as the
  files under `_pages`, you should move out already existing files from this folder to prevent them from getting rendered.
