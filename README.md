# qr-img-generator

<h2>About this Project:</h2>
This is an image-based QR-code generator, built for Florida Memory using QART and Cropper.js. It allows a user to upload an image,
crop, generate a qr-code, then edit the code.
<h2>Reason:</h2>
<p>
We frequently use QR codes for outreach, and as an archive renowned for its extensive photo
collection, we sought the capability to embed QR codes directly into our
photos. We didn't find any good available options, but we discovered an open-source called <a
href="https://github.com/kciter/qart.js?tab=readme-ov-file">QART</a>
, which is a client-side js plugin that turns images into qr codes.
We decided to enhance and develop it into a
more user-friendly platform that simplifies the process of generating,
editing, and downloading codes on the fly. In addition, we used <a href="https://github.com/fengyuanchen/cropperjs">Cropper.js</a> to crop the images.
</p>

<h2>Challenges:</h2>
<p>Image based qr-codes don't always work as well as normal codes, so it took a lot of fine tuning to get the codes to work properly.</p>

<h2>Current Status:</h2>
<p>This project was built as an internal tool to be used by department staff. It is currently complete.</p>
