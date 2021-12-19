const Jimp = require('jimp')

const resizedImg = async (tempUpload) => {
  const updatedImg = await Jimp.read(`${tempUpload}`)
  return updatedImg
    .resize(250, 250)
    .write(`${tempUpload}`)
}

module.exports = resizedImg
