// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/website/";
    },
  },{id: "nav-project-components",
          title: "project components",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/website/projects/";
          },
        },{id: "dropdown-principal-investigator",
              title: "Principal Investigator",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/website/pi/";
              },
            },{id: "dropdown-research-fellow",
              title: "Research Fellow",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/website/rf/";
              },
            },{id: "dropdown-collaborators",
              title: "Collaborators",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/website/collaborators/";
              },
            },{id: "dropdown-consultants",
              title: "Consultants",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/website/consultants/";
              },
            },{id: "dropdown-research-associates",
              title: "Research Associates",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/website/ras/";
              },
            },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/website/blog/";
          },
        },{id: "dropdown-bibliography",
              title: "Bibliography",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/website/bibliography/";
              },
            },{id: "dropdown-suśruta-project-resources",
              title: "Suśruta Project resources",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/website/sushrutaproject1/";
              },
            },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2025/2025-09-17-blog-posts-of-previous-project/";
          
        },
      },{id: "post-ḍalhaṇa-39-s-comments-on-jejjaṭa",
        
          title: "Ḍalhaṇa&#39;s comments on Jejjaṭa",
        
        description: "What did Ḍalhaṇa say about Jejjaṭa?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2025/Dalhanas-comments-on-Jejjata/";
          
        },
      },{id: "post-the-problem-of-jejjaṭa",
        
          title: "The Problem of Jejjaṭa",
        
        description: "Did he write a commentary?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2025/the-problem-of-Jejjata/";
          
        },
      },{id: "post-the-problem-of-candraṭa",
        
          title: "The Problem of Candraṭa",
        
        description: "Did he write a commentary?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2025/the-problem-of-Candrata/";
          
        },
      },{id: "post-the-social-importance-of-variant-readings",
        
          title: "The Social Importance of Variant Readings",
        
        description: "Society Through Philology",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2025/social-importance-of-variant-readings/";
          
        },
      },{id: "post-textual-cruxes",
        
          title: "Textual cruxes",
        
        description: "cruxes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2025/cruxes/";
          
        },
      },{id: "post-acquiring-manuscript-images",
        
          title: "Acquiring manuscript images",
        
        description: "manuscript copies",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2025/acquiring-manuscript-images/";
          
        },
      },{id: "post-promotional-video-for-the-project-ai-generated",
        
          title: "Promotional video for the project (AI generated)",
        
        description: "promotional video",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2025/promotional-video/";
          
        },
      },{id: "post-intertextuality-and-the-methods-of-diagnosis",
        
          title: "Intertextuality and the Methods of Diagnosis",
        
        description: "on the relationship between the Suśrutasaṃhitā and the Carakasaṃhitā",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2025/intertextuality-full/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/website/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "participants-principal-investigator",
          title: 'Principal Investigator',
          description: "",
          section: "Participants",handler: () => {
              window.location.href = "/website/pi/";
            },},{id: "participants-research-associates",
          title: 'Research Associates',
          description: "",
          section: "Participants",handler: () => {
              window.location.href = "/website/ras/";
            },},{id: "participants-research-fellow",
          title: 'Research Fellow',
          description: "",
          section: "Participants",handler: () => {
              window.location.href = "/website/rf/";
            },},{id: "participants-collaborators",
          title: 'Collaborators',
          description: "",
          section: "Participants",handler: () => {
              window.location.href = "/website/collaborators/";
            },},{id: "participants-consultants",
          title: 'Consultants',
          description: "",
          section: "Participants",handler: () => {
              window.location.href = "/website/consultants/";
            },},{id: "projects-project-summary",
          title: 'Project summary',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/1_ss_project_overview/";
            },},{id: "projects-manuscripts-in-space",
          title: 'Manuscripts in space',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/2_ss_MS_mapping/";
            },},{id: "projects-manuscripts-in-time",
          title: 'Manuscripts in Time',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/3_ss_MS_timeline/";
            },},{id: "projects-diplomatic-transcription-of-ms-kathmandu-kl-699",
          title: 'Diplomatic transcription of MS Kathmandu KL 699',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/4_ss_project_diplomatic/";
            },},{id: "projects-edition-of-the-nepalese-version",
          title: 'Edition of the Nepalese version',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/5_ss_project_edition/";
            },},{id: "projects-printed-editions-of-the-suśrutasaṃhitā",
          title: 'Printed editions of the Suśrutasaṃhitā',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/6_ss_project_printed_eds/";
            },},{id: "projects-commentaries",
          title: 'Commentaries',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/7_ss_commentaries/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/website/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
