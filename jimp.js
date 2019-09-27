var Jimp = require('jimp');

var buffer="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
//base64 ile
const buff = Buffer.from(buffer.replace(/^data:image\/\w+;base64,/, ""), 'base64');
var isim="buffer_ornek.jpeg"
Jimp.read(buff, (err, lenna) => {
      if (err) throw err;
      lenna
	.resize(1256, 256)
        .quality(60) // set JPEG quality
        .write("src/assets/" + isim)
    });

//Bir dosya ile
Jimp.read("./asd.jpeg", (err, lenna) => {
      if (err) throw err;
      lenna
        .quality(60) // kalite
        .write("./" + "file_ornek.jpeg")
    });
