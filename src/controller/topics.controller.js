export const getTopics = async(req, res) => {
    res.send("This function returns topcis fetched by all posts")
}

export const getUniqueTopics = async(req, res) => {
    res.send("This function returns unique topic with JSON format");
}