const names = ['최지원은', '전시은은', '안재민은', '박세진은', '권세진은', '김다현은', '김세은은', '김하민은', '원다혜는', '이상민은', '이수민은', '이윤서는', '이해인은', '최지현은', '한수지는', '한연수는'];

function changeName() {
      const randomIndex = Math.floor(Math.random() * names.length);
      const randomName = names[randomIndex];

      document.getElementById('nametag').innerText = randomName;
  }

 setInterval(changeName, 1000);

// 이미지 랜덤 배치

const images = [
    { src: './asset/type1.png', className: 'type1' },
    { src: './asset/type2.png', className: 'type2' },
    { src: './asset/type3.png', className: 'type3' },
    { src: './asset/type4.png', className: 'type4' },
    { src: './asset/type5.png', className: 'type5' },
    { src: './asset/type6.png', className: 'type6' }
];

const wrapper = document.getElementById('logo-wrapper');

const viewportWidth = window.innerWidth;
const wrapperHeight = wrapper.clientHeight;

function placeRandomImage(image) {
    const img = new Image();
    img.src = image.src;
    img.className = `logo-image ${image.className}`;

    img.onload = () => {
        wrapper.appendChild(img);
        moveImageRandomly(img);
    };
}

// 이미지의 랜덤 위치 계산 및 이동 함수
function moveImageRandomly(img) {
    const imgWidth = img.clientWidth;
    const imgHeight = img.clientHeight;

    // 랜덤 위치 계산 (이미지가 뷰포트 밖으로 나가지 않도록 조정)
    const maxX = viewportWidth - imgWidth;
    const maxY = wrapperHeight - imgHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // 이미지 위치 설정
    img.style.left = `${randomX}px`;
    img.style.top = `${randomY}px`;
}

// 모든 이미지를 랜덤으로 배치
images.forEach(image => placeRandomImage(image));

// 1초마다 모든 이미지의 위치를 랜덤으로 변경
setInterval(() => {
    const imgElements = document.querySelectorAll('.logo-image');
    imgElements.forEach(img => moveImageRandomly(img));
}, 1000);

// 윈도우 크기 변경 시 뷰포트 크기 업데이트
window.onresize = () => {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
};