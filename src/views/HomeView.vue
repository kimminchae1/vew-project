<template>
	<div class="container">
		<!-- 왼쪽 영역 (제목, 로고) -->
		<div class="sidebar">
			<h2 class="logo-text1">일상부터 여행까지</h2>
			<h2 class="logo-text2">K-Guide</h2>
			<img class="logo" src="/assets/media/auth/logo1.gif" alt="로고" />
		</div>

		<!-- 오른쪽 영역 (소개글 및 버튼) -->
		<div class="content">
			<div class="intro">
				<p>한국에서 현지 친구와 함께 여행하세요! 믿을 수 있는 K-Guide와 특별한 하루를 예약해 보세요.</p>
				<p>与当地朋友一起旅行，快捷可靠的韩国导游，轻松出行!</p>
				<p>現地の友達と一緒に、本物の韓国を旅しよう！日付を選んで、信頼できる韓国人ガイドを予約しよう！</p>
			</div>

			<div class="button-group">
				<router-link to="/about" class="button">나만의 여행 만들기</router-link>
				<router-link to="/guide" class="button">가이드로 활동하기</router-link>
				<router-link to="/aboutus" class="button">K-Guide 소개</router-link>
				<router-link to="/project" class="button">과제</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HomeView",
};
</script>

<style>
html,
body,
#app {
	margin: 0;
	padding: 0;
	height: 100%;
	width: 100%;
	background-color: white;
}

.container {
	display: flex;
	height: 100vh;
	width: 100vw;
}

/* 왼쪽 단순 텍스트 영역 */
.sidebar {
	width: 450px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
}

/* 로고 이미지 */
.logo {
	width: 120px;
	height: 120px;
	border-radius: 50%;
	margin-bottom: 10px;
	margin-top: 50px;
}

/* 로고 텍스트 */
.logo-text1 {
	font-size: 30px;
	font-weight: bold;
	color: black;
}
.logo-text2 {
	font-size: 60px;
	font-weight: bold;
	color: black;
}

/* 오른쪽 콘텐츠 박스 */
.content {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	max-width: 900px;
	width: 100%;
	background-color: #dde1e9;
	padding: 60px 40px;
	margin: auto;
	border-radius: 16px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* 소개글 */
.intro {
	font-size: 15px;
	margin-bottom: 30px;
}

/* 버튼 그룹 */
.button-group {
	display: flex;
	gap: 40px;
}

/* 버튼 스타일 */
.button {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 16px 24px;
	font-size: 15px;
	color: white;
	background-color: rgba(100, 100, 100, 0.4);
	border-radius: 8px;
	text-decoration: none;
	transition: background-color 0.3s ease;
}

.button:hover {
	background-color: rgba(80, 80, 80, 0.6);
}

.button:active {
	background-color: rgba(60, 60, 60, 0.9);
}
</style>
