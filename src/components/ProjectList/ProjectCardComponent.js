import React, { Component } from "react";

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col lg:flex-row flex-wrap justify-center mr-10 ml-10 lg:mr-60 lg:ml-60">
        <div class="w-full h-64 px-10 my-4 py-6 bg-white rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <span class="font-light text-gray-600">mar 10, 2019</span>
            <a class="px-2 py-1 bg-green-300 text-gray-100 font-bold rounded text-sm" href="/"> 진행중 </a>
          </div>
          <div class="mt-2">
            <a
              class="text-2xl text-gray-700 font-bold hover:text-gray-600"
              href="/"
            >
              제목
            </a>
            <div className="inline-block w-full h-20 overflow-clip overflow-hidden">
            <p class="inline-block mt-2 text-gray-600">
            모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다. 행정각부의 설치·조직과 직무범위는 법률로 정한다.

모든 국민은 자기의 행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다. 형사피의자 또는 형사피고인으로서 구금되었던 자가 법률이 정하는 불기소처분을 받거나 무죄판결을 받은 때에는 법률이 정하는 바에 의하여 국가에 정당한 보상을 청구할 수 있다.

민주평화통일자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 예비비는 총액으로 국회의 의결을 얻어야 한다. 예비비의 지출은 차기국회의 승인을 얻어야 한다.

모든 국민은 법 앞에 평등하다. 누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다.

모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다. 대통령은 취임에 즈음하여 다음의 선서를 한다. 탄핵결정은 공직으로부터 파면함에 그친다. 그러나, 이에 의하여 민사상이나 형사상의 책임이 면제되지는 아니한다.

국회의원의 선거구와 비례대표제 기타 선거에 관한 사항은 법률로 정한다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다.

대법원에 대법관을 둔다. 다만, 법률이 정하는 바에 의하여 대법관이 아닌 법관을 둘 수 있다. 헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다.

국가는 평생교육을 진흥하여야 한다. 대통령은 법률이 정하는 바에 의하여 훈장 기타의 영전을 수여한다. 지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을 관리하며, 법령의 범위안에서 자치에 관한 규정을 제정할 수 있다.

재산권의 행사는 공공복리에 적합하도록 하여야 한다. 대통령의 임기는 5년으로 하며, 중임할 수 없다. 비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의 경우와 초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에 한하여 단심으로 할 수 있다. 다만, 사형을 선고한 경우에는 그러하지 아니하다.

대법원장의 임기는 6년으로 하며, 중임할 수 없다. 사회적 특수계급의 제도는 인정되지 아니하며, 어떠한 형태로도 이를 창설할 수 없다. 공무원인 근로자는 법률이 정하는 자에 한하여 단결권·단체교섭권 및 단체행동권을 가진다.
            </p>
            </div>
          </div>
          <div class="flex justify-between items-center mt-4">
            <a class="text-blue-600 hover:underline" href="/">
              자세히
            </a>
            <div>
              <a class="flex items-center" href="/">
                <img
                  class="mx-4 w-10 h-10 object-cover rounded-full sm:block"
                  src="http://k.kakaocdn.net/dn/5b4p3/btqXfJNCwln/xkWdK3xaopQHiqj3kG3DZ0/img_640x640.jpg"
                  alt="avatar"
                ></img>
                <h1 class="text-gray-700 font-bold">성록</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
