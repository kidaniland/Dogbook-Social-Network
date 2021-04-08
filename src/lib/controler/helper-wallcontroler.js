export const previewImg = (imgfile) => {
    let reader = new FileReader();
    reader.readAsDataURL(imgfile);

    reader.onload = function () {
        let preview = document.querySelector('#imagenPreview');
        
        let imgElement = document.createElement('img');
        imgElement.src = reader.result;
        imgElement.style.width = "20rem";
        /*
        let progressElement = document.createElement('progress');
        progressElement.setAttribute('value', 0);
        progressElement.setAttribute('max', 100);
        progressElement.setAttribute('id', 'uploader');
        */
        preview.innerHTML = '';
        preview.appendChild(imgElement);
        //preview.appendChild(progressElement);
    }

}

export const progressBar = (storageRef, imgFile, uploader) => {
    
    //carga archivo
    let task = storageRef.put(imgFile)
    //actualizar la barra de progreso
    task.on('stated_changed',
        function progress(snapshot) {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
        },
        function error(err) {
            console.error('Error', err);
        },
        function complete() {
            
            task.snapshot.ref.getDownloadUrl()
                .then(function (download_url) {
                    console.log('File available at', downloadURL)
                });
            console.log("se ha subido la imagen correctamente");
        }
    );

}
