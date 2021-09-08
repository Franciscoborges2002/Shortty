const mongoose = require('mongoose')

const SlugSchema = require('./Schemas/slugSchema')

const slug = mongoose.model('Slug', SlugSchema.slugSchema)//Compile into a model

/*var google = new slug({
    url: 'https://www.google.pt/',
    slug: 'oasD23',
    clicks: 1
})

google.save(function(err, slug){
    if(err) return console.log(err)
    console.log(slug.url + " saved to database")
})

slug.findOne({'slug': 'oasD23'}, 'url clicks', (err, slug) =>{
    if(err) return console.log(err)

    console.log(`URL: ${slug.url}, Clicks: ${slug.clicks}`)
})*/

class Db{
    async exec(){
        main().catch(err => console.log(err));

        async function main() {
            await mongoose.connect('',
                                    {useNewUrlParser: true});

            console.log("Connected")
        }
    };
    async findOneByUrl(url){
        await slug.findOne({'url': url}, 'slug clicks', (err, slug) =>{
            if(err) return console.log(err)
        
            console.log(`URL/db: ${slug.slug}, Clicks: ${slug.clicks}`);
            var slug1 = slug.slug
            return slug1
        })
    }
}

module.exports = Db