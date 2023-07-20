fetch('/res/T3-L4/galery.json')
    .then(response => response.json())
    .then(images => {
        const container = document.getElementById('container');
        images.forEach(image => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            img.src = '/res/T3-L4/media/img/galery/' + image.src;
            img.addEventListener('click', () => {
                console.log('click');
                document.getElementById('modal-image').src = img.src;
                document.getElementById('modal-title').textContent = image.title;
                document.getElementById('modal-preview').showModal();
            });
            const title = document.createElement('p');
            title.textContent = image.title;
            div.appendChild(img);
            div.appendChild(title);
            container.appendChild(div);
        });
    })
    .catch(error => console.error(error));

document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('modal-preview').close();
});
