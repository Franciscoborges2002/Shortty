class CreateSlugService{
    async execute(url){
        var slug = await createSlug(6);

        return slug;
    }
}

function createSlug(length){
    var possibilities = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var res = "";

    for(i = 0; i < length; i++){
        var random = Math.floor(Math.random() * 62);
        var char = possibilities.charAt(random);
        res = res + char;
    } 

    return res;
}

module.exports = CreateSlugService;