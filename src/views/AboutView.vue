<template>

  <div>
    <div class="d-flex flex-column flex-lg-row">

      <!-- 시작 : 필터 영역 -->
      <div class="flex-column flex-lg-row-auto w-100 w-lg-250px w-xxl-325px mb-8 mb-lg-0 me-lg-9 me-5">
        <form action="#">
          <div class="card">
            <div class="card-body">

              <!-- 지역 선택 -->
              <div class="mb-5">
                <label class="fs-6 form-label fw-bold text-gray-900">지역 선택</label>
                <select class="form-select form-select-solid" data-control="select2" data-placeholder="In Progress"
                  data-hide-search="true">
                  <option value=""></option>
                  <option value="1">서울</option>
                  <option value="2" selected="selected">경기</option>
                  <option value="3">제주</option>
                  <option value="4">강원</option>
                  <option value="5">경상</option>
                  <option value="6">기타</option>
                </select>
              </div>

              <!-- 성별 선택 -->
              <div class="row mb-5">
                <label class="col-lg-4 col-form-label fw-bold text-gray-900 fs-6 ">성별</label>
                <div class="nav-group nav-group-fluid col-lg-8 fv-row">
                  <label>
                    <input type="radio" class="btn-check" name="type" value="male" checked="checked" />
                    <span class="btn btn-sm btn-color-muted btn-active-dark fw-bold px-4">남자</span>
                  </label>
                  <label>
                    <input type="radio" class="btn-check" name="type" value="female" />
                    <span class="btn btn-sm btn-color-muted btn-active-dark fw-bold px-4">여자</span>
                  </label>
                </div>
              </div>

              <!-- 연령대 선택 -->
              <div class="mb-5">
                <label class="fs-6 form-label fw-bold text-gray-900">연령대</label>
                <select class="form-select form-select-solid" data-control="select2" data-placeholder="In Progress"
                  data-hide-search="true">
                  <option value=""></option>
                  <option value="1">20-25</option>
                  <option value="2" selected="selected">25-30</option>
                  <option value="3">30-35</option>
                  <option value="4">35-40</option>
                  <option value="5">40-45</option>
                  <option value="6">45-50</option>
                  <option value="6">45-50</option>
                  <option value="11">기타</option>
                </select>
              </div>

              <!-- 여행 분위기 선택 -->
              <div class="mb-10">
                <label class="fs-6 form-label fw-bold text-gray-900 mb-5">여행 분위기</label>
                <div class="d-flex flex-wrap">
                  <div class="form-check form-check-custom form-check-solid mb-5 w-50">
                    <input class="form-check-input" type="checkbox" id="kt_search_category_1" />
                    <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6">맛집</label>
                  </div>
                  <div class="form-check form-check-custom form-check-solid mb-5 w-50">
                    <input class="form-check-input" type="checkbox" id="kt_search_category_2" checked="checked" />
                    <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6">문화체험</label>
                  </div>
                  <div class="form-check form-check-custom form-check-solid mb-5 w-50">
                    <input class="form-check-input" type="checkbox" id="kt_search_category_3" />
                    <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6">액티비티</label>
                  </div>
                  <div class="form-check form-check-custom form-check-solid mb-5 w-50">
                    <input class="form-check-input" type="checkbox" id="kt_search_category_4" />
                    <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6">쇼핑</label>
                  </div>
                  <div class="form-check form-check-custom form-check-solid mb-5 w-50">
                    <input class="form-check-input" type="checkbox" id="kt_search_category_6" />
                    <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6">사진</label>
                  </div>
                  <div class="form-check form-check-custom form-check-solid mb-5 w-50">
                    <input class="form-check-input" type="checkbox" id="kt_search_category_6" />
                    <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6">기타</label>
                  </div>
                </div>
              </div>

              <!-- 검색 -->
              <div>
                <button class="btn btn-dark">검색</button>
                <button @click="back()" type="button" class="btn btn-dark ms-3">뒤로가기</button>
              </div>

            </div>
          </div>
        </form>
      </div>
      <!-- 끝 : 필터 영역 -->

      <!-- 시작 : 사람 목록 영역 -->
      <table id="kt_project_users_table" class="table table-row-bordered table-row-dashed gy-4 align-middle fw-bold">

        <!-- 분류 -->
        <thead class="fs-7">
          <tr>
            <th class="min-w-150px">가이드</th>
            <th class="min-w-350px">소개</th>
            <th class="min-w-100px">시간당 비용</th>
            <th class="min-w-60px">성별</th>
            <th class="min-w-100px text-end">채팅</th>
          </tr>
        </thead>

        <!-- 사람 정보 -->
        <tbody>

          <!-- tr : 표의 한 줄 -->
          <!-- v-for="person in persons" : Vue 문법, persons 배열을 반복해서 person 변수로 하나씩 꺼냄 -->
          <!-- :key="person.id" : 고유 식별자 지정 -->
          <tr v-for="person in persons" :key="person.id">

            <!-- td : 셀 하나 / {{ person.name }} : person 객체의 name 속성 표시 -->
            <td>{{ person.name }}</td>
            <td>{{ person.introduce }}</td>
            <td>{{ person.price }}</td>
            <td>{{ person.gender }}</td>

            <td class="text-end">
              <router-link to="/chat" class="btn btn-sm btn-dark">채팅</router-link>
            </td>

          </tr>

        </tbody>

      </table>
      <!-- 끝 : 사람 목록 영역 -->

    </div>
  </div>
</template>

<script setup>
// 여행자가 AboutView.vue 화면에 들어오면 onMounted()이 자동 실행되어
// axios.get()을 통해 서버의 /person/list-data 경로로 요청을 보냄.
// 서버에서 응답받은 데이터는 persons라는 배열에 저장되며,
// v-for를 통해 배열을 반복하면서 각 person 정보를 화면에 출력함.
// axios.get() : 클라이언트(Vue, React 등)에서 서버의 특정 경로로 GET 방식의 요청을 보내기 위한 메서드

// ref :  반응형 변수 만들 때 사용
// onMounted : 컴포넌트가 화면에 처음 그려질 때 실행될 함수 등록
import { ref, onMounted } from 'vue';

// HTTP 요청 라이브러리 axios를 가져옴 (서버에 데이터 요청/전송할 때 사용)
import axios from 'axios';

// 페이지 이동 기능을 제공하는 vue-router에서 useRouter()를 가져옴
import { useRouter } from 'vue-router'

// router 객체를 생성해서 다른 페이지로 이동할 수 있게 준비
const router = useRouter();

// persons라는 반응형 배열 생성
const persons = ref([]);

// 안의 코드 : 컴포넌트가 화면에 처음 나타날 때 한 번 실행됨 (생명주기 훅)
onMounted(async () => {
  try {
    // 백엔드(Node.js 서버)로 GET 요청을 보냄
    // /person/list-data라는 경로에서 가이드 리스트 데이터를 받아옴
    const res = await axios.get('http://localhost:7001/person/list-data');
    // 서버에서 받아온 데이터(res.data.data)를 persons 변수에 저장
    persons.value = res.data.data;
  } catch (err) {
    // 에러 발생 시 콘솔에 에러 내용 출력
    console.error('불러오기 실패:', err);
  }
});

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
