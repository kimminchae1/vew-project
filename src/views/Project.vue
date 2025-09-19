<template>
	<div class="container my-5">

		<div style="max-width: 900px;">

			<div>
				<h3 class="text-center fw-bold text-gray-900 mb-10">📝 과제 후기</h3>
			</div>

			<!-- 개발 과정 및 구현 순서 -->
			<div class="mb-10">
				<h5 class="text-gray-900 fw-bold mb-3">🛠️ 개발 과정 및 구현 순서</h5>
				<p>기획 : 외국인 여행자와 한국인 가이드를 연결하는 매칭 플랫폼이라는 컨셉 기획</p>
				<p>목표 : 사용자가 직접 가이드 등록 및 여행자 화면에 자동 업데이트</p>
			</div>

			<!-- 1. 화면 구성 -->
			<div class="mb-5">
				<p><strong>1. 화면 구성 :</strong> Metronic을 활용하여 About, Guide, Chat 등 기본 페이지를 구성했습니다.</p>
				<img src="/assets/media/avatars/views.png" style="width: 300px;" />
				<p class="text-muted mt-2">🖥️ Metronic 템플릿의 기본 구조와 Vue 파일들 모습</p>
			</div>

			<div class="mb-5">
				<p>1-1. HomeView.vue 초기 화면</p>
				<img src="/assets/media/avatars/homeview.png" style="width: 900px;" />
				<p class="mt-2">🖥️ 왼쪽 영역에는 제목과 로고, 오른쪽 영역에는 소개글 및 페이지 이동으로 구성한 화면으로, router-link를 통해
					About, Guide, Project 등의 페이지로 이동할 수 있는 기능을 구현했습니다.</p>
			</div>

			<div class="mb-5">
				<p>1-2. AboutView.vue 여행객 이용 화면</p>
				<img src="/assets/media/avatars/AboutView1.png" style="width: 900px;" />
				<img src="/assets/media/avatars/AboutView2.png" style="width: 900px;" />
				<p class="mt-2">🖥️ 사용자 조건에 따라 가이드를 필터링 할 수 있는 영역과 사람 목록을 보여주는 영역을 구성한 화면입니다.
					필터 영역에는 select로 지역과 연령대를 선택할 수 있고, radio 로 성별을 선택할 수 있는 기능을 넣었습니다.
					사람 목록 영역에서는 db에서 불러온 persons 배열을 v-for를 사용해 반복 출력하도록 했습니다.
					채팅은 router-link를 사용해 페이지 이동 기능을 구현했습니다.
				</p>
			</div>

			<div class="mb-5">
				<p>1-3. Chat.vue 여행객 채팅 화면</p>
				<img src="/assets/media/avatars/chat.png" style="width: 900px;" />
				<p class="mt-2">🖥️ 가이드 이름 표시, 메세지, 메세지 입력 영역으로 구분하였고, 채팅 입력은 v-model과 ref를 사용해
					사용자가 입력한 메세지를 화면에 바로 출력하는 기초 기능만 구현했습니다.
				</p>
			</div>

			<div class="mb-5">
				<p>1-4. Guide.vue 가이드 정보 입력 화면</p>
				<img src="/assets/media/avatars/guide1.png" style="width: 900px;" />
				<img src="/assets/media/avatars/guide2.png" style="width: 900px;" />
				<p class="mt-2">🖥️ 전체 영역에 이름, 번호, 성별 등 각각의 정보를 입력할 수 있는 영역을 구성한 화면입니다.
					사용자가 입력한 값을 v-model로 처리하고, 신분증 및 범죄경력조회 서류는 accept을 이용해 파일 형식을 제한했습니다.
				</p>
			</div>

			<div class="mb-5">
				<p>1-5. About.vue 사이트 소개 화면</p>
				<img src="/assets/media/avatars/about.png" style="width: 900px;" />
				<p class="mt-2">🖥️ 사이트 소개, 팀원 소개 영역으로 구성한 화면입니다. back 함수를 사용해 뒤로가기 버튼을 넣었습니다. </p>
			</div>

			<!-- 2. 입력 처리 및 데이터 전송 -->
			<div class="mb-5">
				<p><strong>2. 입력 처리 및 데이터 전송 :</strong></p>
				<ul>
					<li>웹서버 : GET 요청을 처리하는 두 개의 라우터(/person/insert, /person/list-data)로 구성</li>
					<li>/person/insert : 가이드 정보 입력 화면에서 사용자가 입력한 정보를 /person/insert에 전송하여, 성공시 알림창을 띄우도록 구현</li>
					<li>/person/list-data : DB에서 가이드 정보를 SELECT로 조회해 응답하고, 에러 발생시 콘솔에 로그를 출력</li>
				</ul>
				<img src="/assets/media/avatars/server.png" style="width: 900px;" />
			</div>

			<!-- 3. 화면 출력 -->
			<div class="mb-5">
				<p><strong>3. 화면 출력 :</strong> v-for 문을 활용해 DB에서 불러온 가이드 정보를 반복 출력했습니다.</p>
				<img src="/assets/media/avatars/vfor.png" style="width: 900px;" />
			</div>

			<!-- 추가 기능 -->
			<div class="mb-10">
				<h5 class="text-gray-900 fw-bold mb-3">💡 추가로 넣고 싶은 기능</h5>
				<ul>
					<li>가이드 정보 입력 화면에서 사진 업로드 및 미리보기</li>
					<li>가이드 정보 입력시 체크한 언어를 여행객 화면에 표시</li>
					<li>여행객 화면에서 필터 기능으로 가이드 조건별 검색</li>
					<li>가이드 정보 입력 화면에서 파일 업로드시 여행객 화면에 표시</li>
					<li>외국인 사용자를 위한 번역 기능</li>
					<li>가이드 신청자가 입력한 정보를 검토할 수 있는 관리자 페이지 기능</li>
				</ul>
			</div>

			<!-- 마지막 영역주기 -->
			<div class="container my-5">
				<div style="height: 150px;"></div>
			</div>
		</div>

	</div>
</template>


<script>

</script>

<style></style>
