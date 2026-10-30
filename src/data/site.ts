export const site={
  "name": "정보이용료 80 해석노트",
  "description": "80이라는 숫자가 비율인지 금액인지, 공제 전인지 후인지 확인하는 질문표입니다.",
  "editor": "결제노트 편집",
  "updatedAt": "2026-10-30",
  "keyword": "정보이용료80",
  "slug": "what-does-80-mean",
  "tag": "숫자와 기준 금액",
  "number": "04",
  "answer": "정보이용료80의 80은 숫자만으로 지급률 80%인지 80만 원인지 확정할 수 없습니다. 단위·기준 금액·공제 포함 여부를 확인한 뒤 최종 수령액과 원래 청구액을 나란히 적으세요.",
  "intro": "80이라는 숫자가 비율인지 금액인지, 공제 전인지 후인지 확인하는 질문표입니다.",
  "steps": [
    {
      "name": "단위를 확인하는 질문부터",
      "description": "상대에게 80이 무엇을 뜻하는지 문장으로 설명해 달라고 요청합니다. 비율이면 어떤 금액에 곱하는지, 금액이면 원과 만 원 중 어느 단위인지 적습니다. 검색 제목의 숫자를 확정 견적으로 사용하지 않습니다."
    },
    {
      "name": "가상 계산에서 공제 구분",
      "description": "실제 견적이 아닌 예시입니다. 청구액 100,000원에 지급률 80%를 적용하고 2,000원을 추가 공제한다면 최종액은 78,000원입니다. 이때 청구액과의 차이는 22,000원이며 광고 숫자와 최종 수령 비율이 다릅니다."
    },
    {
      "name": "빈칸은 미확인으로 남기기",
      "description": "추가 공제와 지급 시점이 빠져 있으면 0원이나 즉시 지급으로 추정하지 않습니다. 처음 안내와 변경된 안내를 함께 보관하세요. 가상 계산은 실제 시세·합법성·상대의 지급 능력을 증명하지 않습니다."
    }
  ],
  "accent": "#533d28" ,
  contact: {
    name: '누티켓', phone: '010-8111-1555', kakaoId: 'N1348',
    kakaoUrl: 'https://qr.kakao.com/talk/MBsKvshDmtamG2EuQNKdmPuGFJQ-',
    sourceUrl: 'https://xn--od1b246c0uc.kr', verifiedAt: '2026-10-03'
  }
} as const;
export const topics=[{id:'basics',name:"숫자와 기준 금액",number:'01',description:"80이라는 숫자가 비율인지 금액인지, 공제 전인지 후인지 확인하는 질문표입니다."}] as const;
export const phoneHref='tel:'+site.contact.phone.replaceAll('-','');
