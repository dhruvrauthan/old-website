// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/old-website/";
    },
  },{id: "nav-art",
          title: "art",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/old-website/art/";
          },
        },{id: "nav-books",
          title: "books",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/old-website/books/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/old-website/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/old-website/projects/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/old-website/contact/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-2001-a-space-odyssey",
          title: '2001: A Space Odyssey',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/2001_space_odyssey/";
            },},{id: "books-a-land-remembered",
          title: 'A Land Remembered',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/a_land_remembered/";
            },},{id: "books-brave-new-world",
          title: 'Brave New World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/brave_new_world/";
            },},{id: "books-childhood-39-s-end",
          title: 'Childhood&amp;#39;s End',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/childhood_end/";
            },},{id: "books-darwin-39-s-radio",
          title: 'Darwin&amp;#39;s Radio',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/darwins_radio/";
            },},{id: "books-destination-void",
          title: 'Destination: Void',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/destination_void/";
            },},{id: "books-the-fall-of-hyperion",
          title: 'The Fall of Hyperion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/fall_of_hyperion/";
            },},{id: "books-childhood-39-s-end",
          title: 'Childhood&amp;#39;s End',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/flowers_for_algernon/";
            },},{id: "books-the-hitchhiker-s-guide-to-the-galaxy",
          title: 'The Hitchhiker’s Guide to the Galaxy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/hitchhikers_guide/";
            },},{id: "books-the-house-of-the-dead",
          title: 'The House of the Dead',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/house_of_the_dead/";
            },},{id: "books-hyperion",
          title: 'Hyperion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/hyperion/";
            },},{id: "books-jazz",
          title: 'Jazz',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/jazz/";
            },},{id: "books-leviathan-wakes",
          title: 'Leviathan Wakes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/leviathan_wakes/";
            },},{id: "books-a-life-on-our-planet-my-witness-statement-and-a-vision-for-the-future",
          title: 'A Life on Our Planet: My Witness Statement and a Vision for the...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/life_on_our_planet/";
            },},{id: "books-neuromancer",
          title: 'Neuromancer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/neuromancer/";
            },},{id: "books-nightfall",
          title: 'Nightfall',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/nightfall/";
            },},{id: "books-the-palace-of-illusions",
          title: 'The Palace of Illusions',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/palace_of_illusions/";
            },},{id: "books-red-dragon",
          title: 'Red Dragon',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/red_dragon/";
            },},{id: "books-some-desperate-glory",
          title: 'Some Desperate Glory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/some_desperate_glory/";
            },},{id: "books-sphere",
          title: 'Sphere',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/sphere/";
            },},{id: "books-what-i-talk-about-when-i-talk-about-running",
          title: 'What I Talk About When I Talk About Running',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/talk_about_running/";
            },},{id: "books-the-alchemist",
          title: 'The Alchemist',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/the_alchemist/";
            },},{id: "books-the-jaunt",
          title: 'The Jaunt',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/the_jaunt/";
            },},{id: "books-the-little-prince",
          title: 'The Little Prince',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/the_little_prince/";
            },},{id: "books-the-shepherd",
          title: 'The Shepherd',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/the_shepherd/";
            },},{id: "books-the-silence-of-the-lambs",
          title: 'The Silence of the Lambs',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/the_silence_of_the_lambs/";
            },},{id: "books-the-stranger",
          title: 'The Stranger',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/the_stranger/";
            },},{id: "books-the-trial",
          title: 'The Trial',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/the_trial/";
            },},{id: "books-the-three-body-problem",
          title: 'The Three-Body Problem',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/three_body_problem/";
            },},{id: "books-vintage-season",
          title: 'Vintage Season',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/old-website/books/vintage_season/";
            },},{id: "news-android-developer-indiahaat",
          title: 'Android Developer   IndiaHaat',
          description: "",
          section: "News",},{id: "news-summer-intern-village-book-builders",
          title: 'Summer Intern   Village Book Builders',
          description: "",
          section: "News",},{id: "news-software-summer-intern-nvidia",
          title: 'Software Summer Intern   NVIDIA',
          description: "",
          section: "News",},{id: "news-research-intern-technische-universität-berlin",
          title: 'Research Intern   Technische Universität Berlin',
          description: "",
          section: "News",},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/old-website/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/old-website/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/old-website/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/old-website/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/old-website/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/old-website/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/old-website/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/old-website/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/old-website/projects/9_project/";
            },},{id: "projects-gt-kvstore",
          title: 'GT-KVStore',
          description: "Developed a C++ gRPC/protobuf distributed key-value store featuring round-robin data partitioning, replication-based fault tolerance and load balancing",
          section: "Projects",handler: () => {
              window.location.href = "/old-website/projects/aos/";
            },},{id: "projects-iris",
          title: 'Iris',
          description: "Developed a web app that transforms your playlist’s genres into dynamic aurora-inspired color visuals",
          section: "Projects",handler: () => {
              window.location.href = "/old-website/projects/aurora/";
            },},{id: "projects-covid-19-cases-tracker",
          title: 'COVID-19 cases tracker',
          description: "Built an Android app tracking India’s COVID-19 cases with visualizations",
          section: "Projects",handler: () => {
              window.location.href = "/old-website/projects/covidtracker/";
            },},{id: "projects-privacy-in-sdn-based-networks",
          title: 'Privacy in SDN based networks',
          description: "Built Apache2/OpenSSL reverse proxy using ESNI and domain fronting to bypass censorship firewalls",
          section: "Projects",handler: () => {
              window.location.href = "/old-website/projects/esni/";
            },},{id: "projects-real-time-darknet-detection",
          title: 'Real-time Darknet detection',
          description: "Modified FreeBSD IPFW for dynamic per-address darknet detection and built a C++ BareFoot Runtime SDN controller for IPv4/IPv6 inactive‐address monitoring—boosting performance by 90%",
          section: "Projects",handler: () => {
              window.location.href = "/old-website/projects/ipfw_darknet/";
            },},{id: "projects-georgia-tech-network-vulnerabilities",
          title: 'Georgia Tech network vulnerabilities',
          description: "Automated Nmap and Censys scans across Georgia Tech’s /10 network, mapping ~42 000 active hosts’ ports, services and CVEs for prioritized remediation",
          section: "Projects",handler: () => {
              window.location.href = "/old-website/projects/nmap/";
            },},{id: "projects-siegebreaker2",
          title: 'SiegeBreaker2',
          description: "Developed a SmartNIC-driven CDN edge proxy that transparently reroutes TLS 1.3 via Docker-hosted Stunnel, preserving encryption to bypass censorship (under review)",
          section: "Projects",handler: () => {
              window.location.href = "/old-website/projects/siegebreaker/";
            },},{id: "projects-sugamyata-teaching-accessibility-in-india",
          title: 'Sugamyata: Teaching accessibility in India',
          description: "Designed academic and industry surveys, and analyzed software engineering course data to evaluate accessibility education outcomes on students",
          section: "Projects",handler: () => {
              window.location.href = "/old-website/projects/sugamyata/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%68%72%75%76%72%61%75%74%68%61%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dhruvrauthan", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dhruv-rauthan", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=stkvlCoAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
