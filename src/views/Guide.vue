<template>

	<!-- 시작 : 전체 콘텐츠 영역-->
	<div class="card mb-5 mb-xl-10">

		<!-- 제목 -->
		<div class="card-header border-0">
			<div class="card-title m-0">
				<h3>👤가이드 정보 등록</h3>
			</div>
		</div>

		<!-- 내용 감싸는 영역 -->
		<div class="card-body border-top p-9">

			<!-- 이름 입력 v-model="nameInput" -->
			<div class="row mb-6">
				<label class="col-lg-4 col-form-label fw-semibold fs-6">이름</label>
				<div class="col-lg-6 fv-row">
					<input type="text" name="fname" v-model="nameInput"
						class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="홍길동" />
				</div>
			</div>

			<!-- 번호 또는 이메일 입력 **추후 기능 확장 필요** -->
			<div class="row mb-6">
				<label class="col-lg-4 col-form-label fw-semibold fs-6">번호 또는 이메일</label>
				<div class="col-lg-8 fv-row">
					<input type="text" name="website" class="form-control form-control-lg form-control-solid"
						placeholder="예) 010-1234-5678 or K-Guide@gmail.com" />
				</div>
			</div>

			<!-- 성별 선택 v-model="genderInput" -->
			<div class="row mb-6">
				<label class="col-lg-4 col-form-label fw-semibold fs-6">성별</label>
				<div class="nav-group nav-group-fluid col-lg-8 fv-row">
					<label>
						<input type="radio" class="btn-check" name="gender" value="남자" v-model="genderInput" />
						<span class="btn btn-sm btn-color-muted btn-active-dark fw-bold px-4">남자</span>
					</label>
					<label>
						<input type="radio" class="btn-check" name="gender" value="여자" v-model="genderInput" />
						<span class="btn btn-sm btn-color-muted btn-active-dark fw-bold px-4">여자</span>
					</label>
				</div>
			</div>

			<!-- 출생년도 **추후 기능 확장 필요** -->
			<div class="row mb-6">
				<label class="col-lg-4 col-form-label fw-semibold fs-6">출생년도</label>
				<div class="col-lg-8 fv-row">
					<input type="tel" name="phone" class="form-control form-control-lg form-control-solid"
						placeholder="예) 2001" />
				</div>
			</div>

			<!-- 직업 입력 **추후 기능 확장 필요** -->
			<div class="row mb-6">
				<label class="col-lg-4 col-form-label fw-semibold fs-6">직업</label>
				<div class="col-lg-8 fv-row">
					<input type="text" name="website" class="form-control form-control-lg form-control-solid"
						placeholder="예) 대학생, 주부, 직장인, 프리랜서 등" />
				</div>
			</div>

			<!-- 활동 가능 지역 선택 **추후 기능 확장 필요** -->
			<div class="mb-10">
				<label class="col-lg-4 col-form-label fw-semibold fs-6">활동 가능 지역</label>
				<div class="d-flex flex-wrap">
					<div class="form-check form-check-custom form-check-solid mb-5 w-50">
						<input class="form-check-input" type="checkbox" id="seoul" />
						<label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6">서울</label>
					</div>
					<div class="form-check form-check-custom form-check-solid mb-5 w-50">
						<input class="form-check-input" type="checkbox" id="gyeonggi" checked="checked" />
						<label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6">경기</label>
					</div>
					<div class="form-check form-check-custom form-check-solid mb-5 w-50">
						<input class="form-check-input" type="checkbox" id="jeju" />
						<label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6">제주</label>
					</div>
					<div class="form-check form-check-custom form-check-solid mb-5 w-50">
						<input class="form-check-input" type="checkbox" id="gangwon" />
						<label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6">강원</label>
					</div>
					<div class="form-check form-check-custom form-check-solid mb-5 w-50">
						<input class="form-check-input" type="checkbox" id="gyeongsang" />
						<label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6">경상</label>
					</div>
					<div class="form-check form-check-custom form-check-solid mb-5 w-50">
						<input class="form-check-input" type="checkbox" id="othersRegions" />
						<label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6">기타</label>
					</div>
				</div>
			</div>

			<!-- 언어 선택 **추후 기능 확장 필요** -->
			<div class="mb-10">
				<label class="col-lg-4 col-form-label fw-semibold fs-6">언어</label>
				<div class="d-flex flex-wrap">
					<div class="form-check form-check-custom form-check-solid mb-5 w-50">
						<input class="form-check-input" type="checkbox" id="ko" />
						<label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6">한국어</label>
					</div>
					<div class="form-check form-check-custom form-check-solid mb-5 w-50">
						<input class="form-check-input" type="checkbox" id="en" checked="checked" />
						<label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6">영어</label>
					</div>
					<div class="form-check form-check-custom form-check-solid mb-5 w-50">
						<input class="form-check-input" type="checkbox" id="ja" />
						<label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6">일본어</label>
					</div>
					<div class="form-check form-check-custom form-check-solid mb-5 w-50">
						<input class="form-check-input" type="checkbox" id="zh" />
						<label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6">중국어</label>
					</div>
					<div class="form-check form-check-custom form-check-solid mb-5 w-50">
						<input class="form-check-input" type="checkbox" id="otherLanguages" />
						<label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6">기타</label>
					</div>
				</div>
			</div>

			<!-- 시간당 비용 입력 v-model="priceInput" -->
			<div class="row mb-6">
				<label class="col-lg-4 col-form-label fw-semibold fs-6">시간당 비용</label>
				<div class="col-lg-8 fv-row">
					<input type="text" name="website" v-model="priceInput"
						class="form-control form-control-lg form-control-solid" placeholder="예) 15000" />
				</div>
			</div>

			<!-- 한줄 자기소개 입력 v-model="introduceInput" -->
			<div class="row mb-6">
				<label class="col-lg-4 col-form-label fw-semibold fs-6">한줄 자기소개</label>
				<div class="col-lg-8 fv-row">
					<input type="text" name="website" v-model="introduceInput"
						class="form-control form-control-lg form-control-solid"
						placeholder="예) 안녕하세요. 소소한 힐링을 좋아하는 나은입니다 :)" />
				</div>
			</div>

			<!-- 신분증 사본 파일 업로드 **추후 기능 확장 필요** -->
			<div class="mb-10">
				<label class="form-label">신분증 사본</label>
				<input type="file" name="idCard" accept=".jpg, .jpeg, .png, .pdf" class="form-control" />
			</div>

			<!-- 범죄경력조회 증빙서류 파일 업로드 **추후 기능 확장 필요** -->
			<div class="mb-10">
				<label class="form-label">범죄경력조회 증빙서류</label>
				<input type="file" name="criminalRecord" accept=".jpg, .jpeg, .png, .pdf" class="form-control" />
			</div>

			<!-- 가이드 등록하기, 뒤로가기 버튼 -->
			<div class="card-footer d-flex justify-content-end py-6 px-9">
				<button @click="save()" type="button" class="btn btn-dark" id="kt_account_profile_details_submit">가이드 등록하기</button>
				<button @click="back()" type="button" class="btn btn-dark ms-3" id="kt_account_profile_details_submit">뒤로가기</button>
			</div>
		</div>
		
	</div>
	<!-- 끝 : 전체 콘텐츠 영역-->

</template>

<script setup>
// 사용자가 Guide.vue 화면에서 이름, 성별(라디오), 시간당 비용, 자기소개 등을 입력하고
// v-model로 값 변수에 담아 이 중 일부 입력값을 axios.get() 요청을 통해
// 쿼리 파라미터로 서버의 /person/insert 경로로 전송

// ref : 반응형 데이터(변수)를 만들기 위한 Vue 함수
import { ref } from 'vue';

// userRouter : 페이지를 이동하거나 뒤로가기 등의 동작을 할 수 있는 라우터 객체 가져옴
// useRoute : 현재 페이지의 URL 정보(쿼리, 파라미터 등)를 얻을 수 있는 객체
import { useRouter } from 'vue-router'

// HTTP 요청 라이브러리 axios를 가져옴 (서버에 데이터 요청/전송할 때 사용)
import axios from 'axios';

// router 객체를 생성해서 다른 페이지로 이동할 수 있게 준비
const router = useRouter();

// nameInput, introduceInput, priceInput, genderInput 변수 선언
// 반응형 변수 생성 (Vue는 이 변수값이 바뀌면 화면도 자동으로 다시 그림)
// 처음에는 빈 문자열로 초기화
// 사용자가 입력한 이름, 자기소개, 가격, 성별이 각각 이 변수에 들어감
const nameInput = ref('');
const introduceInput = ref('');
const priceInput = ref('');
const genderInput = ref('');

// 가이드 정보를 저장하는 함수
async function save() {
	try {
		// 서버의 /person/insert 경로로 GET 요청을 보냄
		await axios.get('http://localhost:7001/person/insert', {
			params: {
				// 입력된 사용자 값들을 쿼리 파라미터로 전송 (URL에 붙어서 서버로 데이터를 전달하는 방법)
				name: nameInput.value,
				introduce: introduceInput.value,
				price: priceInput.value,
				gender: genderInput.value,
			}
		});
		// 서버 응답이 성공하면 alert 창을 띄워서 사용자에게 등록 완료 메시지
		alert('가이드 등록이 완료되었습니다!');
	} catch (err) {
		// 에러가 발생하면 콘솔에 실패 이유 출력
		console.error('등록 실패:', err);
	}
}

function back() {
	router.push('/');
}
</script>

<style scoped>
.form-check-input:checked {
	background-color: #000 !important;
	border-color: #000 !important;
}
</style>
