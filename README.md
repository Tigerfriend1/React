# 📘 React 실습 프로젝트 정리 (ch01 ~ ch07)

각 챕터별 학습 주제와 핵심 내용을 정리한 문서입니다.  
실습 프로젝트는 Vite 기반의 React 환경에서 진행되었습니다.

---

## 🗂️ 챕터별 주제 요약

- **ch01**: 🌱 *리액트 개발 환경 설정 및 첫 컴포넌트 작성*  
  → Vite를 사용한 프로젝트 초기화 및 간단한 컴포넌트 출력

- **ch02**: 🧱 *JSX 문법 및 Props, State 개념 이해*  
  → JSX 기본 문법, props 전달 방식, state를 통한 상태 변경

- **ch03**: 🎯 *이벤트 처리 및 컴포넌트 상태 변경 실습*  
  → onClick, onChange 등 이벤트 핸들링과 동적 렌더링 실습

- **ch04**: 🔁 *useReducer, useState 등 훅을 통한 상태 관리 실습*  
  → 상태 분기 처리를 위한 reducer 정의 및 dispatch 활용

- **ch05**: 🔀 *React Router를 이용한 페이지 이동 및 파라미터 전송*  
  → 쿼리스트링, URL 파라미터, state를 통한 데이터 전달 라우팅

- **ch06**: 🧠 *Context API를 활용한 전역 상태 관리*  
  → createContext와 useContext로 컴포넌트 간 데이터 공유

- **ch07**: 🌐 *REST API 연동 및 CRUD 기능 구현 실습 (json-server 활용)*  
  → fetch를 통한 데이터 통신, 회원 등록/조회/수정/삭제 기능 구현

---

## 🚀 실행 방법

```bash
# 원하는 챕터로 이동
cd ch03  # 예: ch03

# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# (ch07 전용) json-server 실행
json-server --watch db.json --port 3000
