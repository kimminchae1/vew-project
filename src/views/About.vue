<template>

	<!-- 시작 : 전체 콘텐츠 영역-->
	<div id="kt_app_content" class="app-content flex-column-fluid">
		<!-- 시작 : 카드 영역-->
		<div class="card">
			<!-- 카드 안의 실제 내용 영역-->
			<div class="card-body p-lg-17">

				<!-- 제목 및 이미지 영역 -->
				<div class="mb-10">
					<div>
						<h3 class="text-center fs-2hx text-gray-900 mb-5">About K-Guide</h3>
						<div class="fs-5 text-muted fw-semibold mb-10">K-Guide는 외국인 여행자와 한국 현지인을 연결해주는 여행 매칭 플랫폼입니다.
							<br />전문 가이드가 아니더라도, 한국에 사는 누구나 자신의 일상을 외국인과 나누며 특별한 추억을 만들 수 있어요.
						</div>
					</div>
					<div>
						<img class="w-100" src="/assets/media/stock/1600x800/aboutus2.jpg" alt="" />
					</div>
				</div>

				<!-- 소개글 영역 -->
				<div class="fs-5 fw-semibold text-gray-600">
					<p class="mb-8">
						외국인 여행자는 여행사 없이도 현지인과 함께 진짜 한국을 경험할 수 있고,
						현지인의 시선으로만 볼 수 있는 장소, 맛집, 문화를 직접 느낄 수 있다는 것이 가장 큰 매력입니다.
						또한 언어와 문화를 배우며 친구를 사귈 수 있는 기회도 함께 제공돼요.
					</p>
					<p class="mb-8">한국 사람은 자유롭게 시간당 비용을 정해 수익을 얻을 수 있고,
						외국인 친구를 사귀며 소통의 즐거움을 경험할 수 있어요.
						전문적인 경력이 없어도 누구나 쉽게 가이드를 시작할 수 있으며,
						딱딱한 여행사 투어가 아닌 따뜻하고 기억에 남는 여행을 선물할 수 있습니다.
					</p>
					<p class="mb-8">안전한 여행을 위해 K-Guide는 범죄경력조회 및 신분증 확인 절차를 거친 가이드만 등록할 수 있도록 하고 있습니다.
						또한 성별, 나이, 언어, 취향에 따라 맞춤형 가이드를 선택할 수 있어 더욱 편하고 안심되는 여행이 가능합니다.
					</p>
					<p class="mb-17">당신의 일상이, 누군가에겐 가장 특별한 여행이 됩니다.
						K-Guide에서 새로운 여행의 방식을 시작해보세요.
					</p>
				</div>

				<!-- 팀원 소개 영역 -->
				<div>
					<div class="text-center mb-17">
						<h3 class="fs-2hx text-gray-900 mb-5">K-Guide 팀원</h3>
					</div>

					<div>
						<div class="col text-center">
							<img class="mb-7" src="/assets/media/avatars/kimminchae.png" alt="" style="width: 100px;" />
							<div class="mb-0">
								<a href="pages/user-profile/projects.html"
									class="text-gray-900 fw-bold text-hover-primary fs-3">김민채</a>
								<div class="text-muted fs-6 fw-semibold">lx공간정보아카데미 12기</div>
							</div>
						</div>
					</div>
				</div>

				<!-- 뒤로가기 버튼 영역 -->
				<div>
					<button @click="back()" type="button" class="ms-3 ">↩️</button>
				</div>

			</div>
			<!-- 끝 : 카드 안의 실제 내용 영역-->
		</div>
		<!-- 끝 : 카드 영역 -->
	</div>
	<!-- 끝 : 전체 콘텐츠 영역 -->

</template>


<script setup>

// vue-router라는 라이브러리에서 useRouter() 함수를 가져오는(import) 코드
// 페이지 이동에 필요한 객체를 만들 수 있는 함수인 useRouter
import { useRouter } from 'vue-router'

// 라우터 객체 생성
// Router : 페이지 이동할 때 사용
const router = useRouter();

function back() {
	router.push('/');
}

</script>

<style></style>