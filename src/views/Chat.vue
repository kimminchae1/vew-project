<template>

	<!-- 시작 : 전체 콘텐츠 영역-->
	<div class="flex-lg-row-fluid ms-lg-7 ms-xl-10">
		<!-- 시작 : 전체 메세지 영역 -->
		<div class="card" id="kt_chat_messenger">

			<!-- 가이드 이름 표시 영역 -->
			<div class="card-header" id="kt_chat_messenger_header">
				<div class="card-title">
					<div class="d-flex justify-content-center flex-column me-3">
						<a href="#" class="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1">김길동 가이드</a>
					</div>
				</div>
			</div>

			<!-- 메세지 영역-->
			<div class="card-body" id="kt_chat_messenger_body">
				<div class="scroll-y me-n5 pe-5 h-300px h-lg-auto" data-kt-element="messages" data-kt-scroll="true">

					<div class="d-flex justify-content-end mb-10">
						<div class="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
							data-kt-element="message-text">김길동 가이드님 안녕하세요.</div>
					</div>

					<div class="d-flex justify-content-start mb-10">
						<div class="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
							data-kt-element="message-text">안녕하세요!</div>
					</div>

					<div class="d-flex justify-content-end mb-10">
						<div class="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
							data-kt-element="message-text">저는 2025년 11월에 한국으로 여행을 갑니다.</div>
					</div>

					<div class="d-flex justify-content-start mb-10">
						<div class="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
							data-kt-element="message-text">반가워요! 한국 여행은 처음인가요?</div>
					</div>

				</div>
			</div>

			<!-- 메시지 입력 영역 -->
			<div class="card-footer pt-4" id="kt_chat_messenger_footer">

				<div class="d-flex justify-content-end mb-10">
						<div class="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
							data-kt-element="message-text">{{ message }}</div>
				</div>
				
				<div class="d-flex align-items-center gap-3">
					<textarea v-model="input" class="form-control form-control-flush" rows="1" data-kt-element="input"
						placeholder="메시지를 입력하세요."></textarea>
					<button @click="send()" class="btn btn-dark" type="button" data-kt-element="send">Send</button>
				</div>
			</div>


		</div>
		<!-- 끝 : 전체 메세지 영역 -->
	</div>
	<!-- 끝 : 전체 콘텐츠 영역-->

</template>

<script setup>
// ref : 반응형 데이터(변수)를 만들기 위한 Vue 함수
// 반응형 데이터 : 사용자 인터페이스(UI)를 자동으로 업데이트해주는 데이터
import { ref } from 'vue';

// input : 사용자가 textarea에 입력하는 값을 저장하기 위한 reactive 상태 변수
// message : 화면에 표시될 최종 메시지
const input = ref('');
const message = ref('');

function send() {
  message.value = input.value;
  input.value = '';
}
</script>

<style></style>