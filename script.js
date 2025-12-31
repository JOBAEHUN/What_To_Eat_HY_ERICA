const menu = [
  "홍당무", "부대통령", "한그릇", "큰맘할매순대국", "조박사",
  "소담골", "상황삼계탕", "일미닭갈비", "병천순대국", "알촌",
  "신선샤브", "육바연", "동양솥밥", "백소정", "도야짬뽕",
  "김밥천국", "이서식당", "찌개찌개", "The 빱집", "일미감자탕",
  "행복한짬뽕", "남월", "파앤피", "교반", "양식당", "북경반점",
  "진대광"
];

function recommend() {
  const pick = menu[Math.floor(Math.random() * menu.length)];
  const result = document.getElementById("result");
  const button = document.querySelector("button");

  result.innerHTML = `<span style="font-size: 2.2em;"><strong>${pick} ㄱㄱ</strong></span>`;
  button.innerText = "다시 돌리기";
}

function toggleMenuList() {
  const menuDiv = document.getElementById("menu-list");
  const list = document.getElementById("menu-items");
  const toggleBtn = document.getElementById("toggle-button"); // 버튼 요소 가져오기

  if (menuDiv.style.display === "none") {
    if (list.children.length === 0) {
      for (let i = 0; i < menu.length; i += 5) {
        const group = document.createElement("div");
        group.className = "menu-group";

        const items = menu.slice(i, i + 5)
          .map(item => item)
          .join("　　");

        group.textContent = items;
        list.appendChild(group);
      }
    }
    menuDiv.style.display = "block";
    toggleBtn.innerText = "전체 메뉴 닫기"; // ✅ 텍스트 변경
  } else {
    menuDiv.style.display = "none";
    toggleBtn.innerText = "전체 메뉴 보기"; // ✅ 원상 복귀
  }
}
