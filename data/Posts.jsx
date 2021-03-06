import { USERS } from "./User";

export const POSTS = [
    {
        imageUrl:
            "https://res.cloudinary.com/ratnakar5938/image/upload/v1636388192/insta-clone/facts_2_eojlwi.jpg",
        height: 420,
        user: USERS[0].user,
        likes: 30,
        caption: "Covid-19 Vaccine Facts",
        profile_picture: USERS[0].image,
        comments: [
            {
                user: "_rosed_55_",
                comment: "Awesome poster dude",
            },
            {
                user: "Madmax",
                comment: "Great work๐๐๐",
            },
            {
                user: "_rosed_55_",
                comment: "Awesome poster dude",
            },
            {
                user: "Madmax",
                comment: "Great work๐๐๐",
            },
            {
                user: "_rosed_55_",
                comment: "Awesome poster dude",
            },
            {
                user: "Madmax",
                comment: "Great work๐๐๐",
            },
        ],
    },
    {
        imageUrl:
            "https://res.cloudinary.com/ratnakar5938/image/upload/v1636608535/insta-clone/Screenshot_2021-11-11-10-44-18-63_1c337646f29875672b5a61192b9010f9_su10tz.jpg",
        height: 420,
        user: USERS[1].user,
        likes: 38,
        caption:
            '"Sometimes you need to burn bridges in order to stop yourelf from crossing them again."\nโฃ๏ธ๐ฅ',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: "sanikanhaiya518",
                comment: "Gorgeous",
            },
            {
                user: "geethacharan_43",
                comment: "Looking gorgeous๐ฅฐ",
            },
            {
                user: "sushmasalonki88",
                comment: "๐๐๐",
            },
            {
                user: "21_l.e.t.t.e.r.s",
                comment: "caption๐ฅ",
            },
            {
                user: "_ross_alin05",
                comment: "โค๏ธโค๏ธ๐",
            },
        ],
    },
    {
        imageUrl:
            "https://res.cloudinary.com/ratnakar5938/image/upload/v1636610045/insta-clone/Screenshot_2021-11-11-11-00-39-65_1c337646f29875672b5a61192b9010f9_noau7n.jpg",
        height: 420,
        user: USERS[2].user,
        likes: 58,
        caption: "sorry text corrupted",
        profile_picture: USERS[2].image,
        comments: [
            {
                user: "ppashingu",
                comment:
                    "Bhai creativity be like Madmax janha khada hota hai wahin se suru hoti hai ๐ฅโค๏ธ๐",
            },
            {
                user: "r.k_1113_",
                comment: "That's exactly how a robot would detect๐ค๐ค",
            },
            {
                user: "sooooomyaaaaa",
                comment: "Select all the squares with traffic lights ๐ฆ",
            },
            { user: "mishradiwakar39", comment: "Real id se aa memelogy๐" },
        ],
    },
    {
        imageUrl:
            "https://res.cloudinary.com/ratnakar5938/image/upload/v1636610669/insta-clone/Screenshot_2021-11-11-11-25-23-69_1c337646f29875672b5a61192b9010f9_e8cjxo.jpg",
        height: 250,
        user: USERS[3].user,
        likes: 171,
        caption:
            "Collecting Moments through the captures๐ธ. One month of planning and bringing down people to one roof was worth it. A small collection of momentsโจ from these beautiful people๐ซ will makeit to one of shelves at the top",
        profile_picture: USERS[3].image,
        comments: [
            {
                user: "_.siddharth_ray._",
                comment: "๐ฅ๐ฅ๐ฅ",
            },
            {
                user: USERS[3].user,
                comment: "@_.siddharth_ray._ ๐ซโจ",
            },
        ],
    },
];

export const PostFooterIcons = [
    {
        name: "like",
        imageUrl:
            "https://img.icons8.com/material-outlined/24/ffffff/like--v1.png",
        likedImageUrl:
            "https://img.icons8.com/ios-glyphs/30/fa314a/like--v1.png",
    },
    {
        name: "comment",
        imageUrl:
            "https://img.icons8.com/material-outlined/60/ffffff/speech.png",
    },
    {
        name: "share",
        imageUrl:
            "https://img.icons8.com/material-outlined/24/ffffff/filled-sent.png",
    },
    {
        name: "save",
        imageUrl:
            "https://img.icons8.com/material-outlined/24/ffffff/bookmark-ribbon.png",
    },
];
