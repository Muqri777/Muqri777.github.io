const table = [
    'M', 'Abdullah Faiz Adam', '27' ,1,1,
    'F', 'Aenizawati Abdul Samad', '43' ,2,1,
    'M', 'Afiq Aiman', '24' ,3,1,
    'F', 'Afiqah Hisham', '27' ,4,1,
    'F', 'Afreena Nisha', '24' ,5,1,
    'M', 'Ahmad Zarif', '27' ,6,1,
    'M', 'Ahmad Taufiq', '24' ,7,1,
    'M', 'Ahmad Kamil Hamzah', '24' ,8,1,
    'M', 'Aiman Affandi', '27' ,9,1,
    'F', 'Ain Zairi', '32' ,10,1,
    'M', 'Akhmal Hilmi', '19' ,11,1,
    'M','Akmal Ridzuan','22',12,1,
    'M','Alan Chin','24',13,1,
    'M','Aleep Najmi','20',14,1,
    'M','Alex Wong','24',15,1,
    'M','Alif Danial','24',16,1,
    'F','Amira Hameem','24',17,1,
    'M','Amirul Azim','24',18,1,
    'M','Amirul Fitri','22',18,1,
    'M','Ammar Zack','27',1,2,
    'M','Ammarrauf Almi','24',2,2,
    'F','Ana Johari','22',3,2,
    'F','Anessa Budiman','24',4,2,
    'F','Anussa Manogaran','24',5,2,
    'M','Arif Zamri','24',6,2,
    'M','Arrazi ','27',7,2,
    'F','Asiah Ahmad','47',8,2,
    'M','Asryraf Ifraheim','27',9,2,
    'F','Atira Murni','23',10,2,
    'M','Awa Helmi','24',11,2,
    'M','Azie Aziz','',12,2,
    'F','Azmaniah Binti Abdullah','',13,2,
    'F','Biela Zamri','',14,2,
    'M','Hassan','',15,2,
    'M','Charlene Wong','',16,2,
    'M','Chee Keong Ng','',17,2,
    'M','Chu Zi Huao','',18,2,
    'F','Cik Aryzsa','',1,3,
    'M','Cikgu Ramlan','',2,3,
    'F','Cindy Gan','',3,3,
    'M','Cong Tang','',4,3,
    'M','David Mazir','',5,3,
    'M','Dik Pong','',6,3,
    'M','Emir','',7,3,
    'M','Erfan Farhan','',8,3,
    'M','Faiz Helmy','',9,3,
    'M','Fakih Ari','',10,3,
    'F','Farah Datul Wahida','',11,3,
    'F','Farah Shazwin','',12,3,
    'M','Farhan','',13,3,
    'F','Farizah Daud','',14,3,
    'F','Fatin Azahari','',15,3,
    'F','Fazlin Iswani','',16,3,
    'M','Firdaus Aiman','',17,3,
    'M','Arif Hafiz','',18,3,
    'M','Haiqal Hassan','',1,4,
    'M','Nazrul','',2,4,
    'F','Hamidah Uda Ahmad','',3,4,
    'M','Harith Zahoreen','',4,4,
    'F','Hasniah Hassan','',5,4,
    'M','Hazmi Arif Zuhri','',6,4,
    'M','Hema Deva Ram','',7,4,
    'M','Hinye Loh','',8,4,
    'M','Hor Chan Git','',9,4,
    'F','Husna Nabila','',10,4,
    'F','iera shira','',11,4,
    'M','Ikhwan Fauzi','',12,4,
    'M','Imran Yai','',13,4,
    'M','Imran Syahril','',14,4,
    'M','Irfan Harraz','',15,4,
    'M','Irham Firdaus','',16,4,
    'M','Irnie Pauzi','',17,4,
    'M','Iskandar Zulkarnain','',18,4,
    'F','Izzah Rahmat','',1,5,
    'F','Izzah Johari','',2,5,
    'F','Jannah Sumire','',3,5,
    'M','Jasvin Singh','',4,5,
    'F','Jenny Seetho','',5,5,
    'M','Jian wen','',6,5,
    'M','Jun Wai','',7,5,
    'F','Kak Long','',8,5,
    'M','Kaveeish','',9,5,
    'F','Yen Kei','',10,5,
    'F','Khadijah Latifi','',11,5,
    'F','Khai Niza','',12,5,
    'M','Khairul','',13,5,
    'M','Khairul Naim','',14,5,
    'M','Kairul Husni','',15,5,
    'M','Kong Yih Shen','',16,5,
    'F','Manvy Lai','',17,5,
    'F','Lee Jiayu','',18,5,
    'M','Mani Rajan','',1,6,
    'M','Maulidur Izham','',2,6,
    'M','Mazen Al-Seaghi','',3,6,
    'M','Megat Hilmi','',4,6,
    'M','Mohammad Firdaus','',5,6,
    'M','Mohd Alfian','',6,6,
    'M','Mohd Awalludin','',7,6,
    'M','Mohd Khairi','',8,6,
    'M','Mohd Rohaizad','',9,6,
    'M','Mohd Zaihizrai','',10,6,
    'F','Monica Anne','',11,6,
    'M','Muhammad Fathi','',12,6,
    'M','Muhammad Abdul','',13,6,
    'M','MUhammad Fitri','',14,6,
    'M','Muhammad Fikri Mahanir','',15,6,
    'M','Muhammad Haikal','',16,6,
    'M','Muhammad Afiq','',17,6,
    'M','Muhammad Asyraf','',18,6,
    'M','Muhammad Safwan','',1,7,
    'M','Muhammad Illiyas','',2,7,
    'M','Muhammad Haziq','',3,7,
    'M','Muhammad Syakil Daniel','',4,7,
    'M','Muhammad Nazran Solehin','',5,7,
    'M','Muhammad Mursyid','',6,7,
    'M','Muhammd Akmal','',7,7,
    'M','Muhammad Fakhruddin','',8,7,
    'M','Muhammad Syafiq','',9,7,
    'M','Muhammad Ikhwan','',10,7,
    'M','Muhammad Adlil Haziq','',11,7,
    'M','Muhd Adam HIsham','',12,7,
    'M','Muhd Hafizudin','',13,7,
    'M','Muhd Zul Helmi','',14,7,
    'M','Muhd Azri Farhan','',15,7,
    'M','Muhd Aiman','',16,7,
    'M','Muhd Akmal','',17,7,
    'M','Muhd Lukman','',18,7,
    'M','Muhd Adiib','',1,8,
    'M','Muiz An nur','',2,8,
    'M','Munawarah Mohamad','',3,8,
    'F','Munira Madar','',4,8,
    'M','Najmi','',5,8,
    'F','Nasmiza','',6,8,
    'M','Nik Anas','',7,8,
    'F','Nina Tiara','',8,8,
    'M','Nor Faizul','',9,8,
    'F','Norazah Hariri','',10,8,
    'F','Nur Fiza','',11,8,
    'F','Nur Syafiqah','',12,8,
    'F','Nur Atirah','',13,8,
    'F','Nur Zahidah','',14,8,
    'F','Nur Iman Sofea','',15,8,
    'F','Nur Shahirah','',16,8,
    'F','Nur Hazeera','',17,8,
    'F','Nurin Afrina','',18,8,







    
];

let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = {simple: [], table: [], sphere: [], helix: [], grid: [], cone:[]};

init();
animate();

function init() {

    initCamera();

    initScene();

    initObjects();

    addClickListeners();

    initRenderer();

    initTrackbarControls();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false);

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function initObjects() {

    simpleObjectsLayout();
    generateGeometricLayouts();

}

function addClickListeners() {

    addClickListener(targets.table, 'table');
    addClickListener(targets.sphere, 'sphere');
    addClickListener(targets.helix, 'helix');
    addClickListener(targets.grid, 'grid');
    addClickListener(targets.cone, 'cone');

}

function simpleObjectsLayout() {

    for (let i = 0; i < table.length; i += 5) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }

}

function htmlElement(table, i) {
    let element = document.createElement('div');
    element.className = 'element';
    if(table[i]=='F'){
    element.style.backgroundColor = 'rgba(255, 20, 147,' + (Math.random() * 0.5 + 0.25) + ')';}
    else{
        element.style.backgroundColor = 'rgba(137, 207, 240,' + (Math.random() * 0.5 + 0.25) + ')';
    }
    let number = document.createElement('div');
    number.className = 'number';
    number.textContent = (i / 5) + 1;
    element.appendChild(number);

    let symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = table[i];
    element.appendChild(symbol);

    let details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
    element.appendChild(details);

    element.addEventListener('click', ()=>elementClickHandler(i), false);

    return element;
}

function elementClickHandler(i){

    transform(targets.table,1000);

    new TWEEN.Tween(targets.simple[i / 5].position)
        .to({
            x: 0,
            y: 0,
            z: 2500
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}

function tableLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = (table[index + 3] * 140) - 1330;
    object.position.y = -(table[index + 4] * 180) + 990;
    targets.table.push(object);

}

function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();
    let coneVector = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
        addHelixObject(helixVector, i);
        addGridObject(i);
        addConeObject(coneVector, i);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);

    targets.sphere.push(object);
}

function addHelixObject(helixVector, index) {

    const theta = index * 0.175 + Math.PI;
    const y = -(index * 8) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    helixVector.x = object.position.x * 2;
    helixVector.y = object.position.y;
    helixVector.z = object.position.z * 2;

    object.lookAt(helixVector);

    targets.helix.push(object);
}

function addGridObject(index) {

    let object = new THREE.Object3D();
    object.position.x = ((index % 5) * 400) - 800;
    object.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(index / 25)) * 1000 - 2000;
    targets.grid.push(object);

}

function addConeObject(coneVector , index){

    const theta = index * 4 + Math.PI;
    const y = -(index * 12) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(theta, y);

    coneVector.x = object.position.x * 2;
    coneVector.y = object.position.y;
    coneVector.z = object.position.z * 2;

    object.lookAt(coneVector);

    targets.cone.push(object);

}

function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    composer.render();
}
