import StoryCard from "./StoryCard";



const stories = [
    {
    name:"Mihai Vadana",
    src:    'https://scontent.fias1-1.fna.fbcdn.net/v/t1.6435-9/57674161_2385022171529838_84130815826460672_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHOKwzpPqsrIiHfiwzE_ChvsGP2h9GMySuwY_aH0YzJK7WRwpKAupeZcTKcs27qqvMGdVprUwmaNo36TsuijiX4&_nc_ohc=ujsV48i5_MYAX8jvxtQ&_nc_ht=scontent.fias1-1.fna&oh=8e7d4605e1bec548e02533a18eb8515c&oe=60D69914',
    profile:'https://scontent.fias1-1.fna.fbcdn.net/v/t1.6435-9/61045316_2442513462447375_6808627404546768896_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeFnjBBo1GvCRalKE_39ZB01Fu2fZlqSzeAW7Z9mWpLN4PccP-XihNgXqfAaAJMidNm-4COaI48x7h5xSILrKmUo&_nc_ohc=-3EFryy10xYAX9vvpui&tn=hr6okZIzUarr658E&_nc_ht=scontent.fias1-1.fna&oh=665f776e81263dd825f2559d5a701ca7&oe=60D6F988'

},
{
    name:"Elon Musk",
    src:"https://links.papareact.com/4zn",
    profile:"https://links.papareact.com/kxk"
},
{
    name:"Jeff Bezos",
    src:"https://links.papareact.com/k2j",
    profile:"https://links.papareact.com/f0p"
},
{
    name:"Mark Zuckerberg",
    src:"https://links.papareact.com/xql",
    profile:"https://links.papareact.com/snf"
},
{
    name:"Bill Gates",
    src:"https://links.papareact.com/4u4",
    profile:"https://links.papareact.com/zvy"
},

];



const Stories = () => {
    return (
        <div className='flex justify-center space-x-3 mx-auto' >
            {stories.map((story) => (
                <StoryCard
                 key={story.src}
                 name={story.name} 
                 src={story.src}
                  profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories;
