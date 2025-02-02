// config.js
module.exports = {
    github: {
        username: 'maekhaled', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: true, // Forked projects will not be displayed if set to true.
            projects: ['laravel-ecommerce'] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'maekhaled',
        twitter: '',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'www.maekhaled.com',
        phone: '732-925-5604',
        email: 'mkhaled1579@gmail.com'
    },
    skills: [
        'Java',
        'C',
        'Python',
        'MATLAB',
        'MySQL',
        'Git',
        'HTML',
        'CSS'
    ],
    experiences: [
        { 
            company: 'Tesla',
            position: 'Manufacturing Engineering Intern',
            from: 'August 2021',
            to: 'Present'
        },
        { 
            company: 'Rutgers University',
            position: 'Resident Assistant',
            from: 'Septemeber 2020',
            to: 'June 2021'
        },
        { 
            company: 'Uber Advanced Technologies Group',
            position: 'Supply Chain and Business Operations Intern',
            from: 'June 2020',
            to: ' August 2020'
        }
    ],
    education: [
        { 
            institution: 'Rutgers Univeristy',
            degree: 'Bachelor of Science in Industrial Engineering & Computer Science',
            from: '2017',
            to: 'Present'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'maekhaled',
        limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '3270091161' // Please remove this and use your own tag id or keep it empty
    },
    themeConfig: {
        default: 'garden',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: true,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
