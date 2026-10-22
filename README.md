# CommuteNet React

네트워크관리사 2급 기출문제 학습 앱입니다. React 19와 Vite를 사용하며, 기존 HTML에 내장된 18회 900문항의 이미지·답안표를 그대로 분리해 사용합니다.

## 실행 환경

- Node.js 20.19 이상 또는 22.12 이상
- npm
- VS Code

## 설치 및 실행

1. VS Code에서 이 저장소의 `NA2-com` 폴더를 엽니다.
2. 터미널에서 `npm ci`를 실행합니다.
3. `npm run dev`를 실행합니다.
4. 기본 주소 `http://127.0.0.1:5173`을 브라우저에서 엽니다.

VS Code 명령 팔레트(`Ctrl+Shift+P`)에서 `Tasks: Run Task`를 실행하고 `CommuteNet: 개발 서버`를 선택해도 됩니다. 개발 서버를 중지하려면 터미널에서 `Ctrl+C`를 누릅니다.

Node.js가 설치되어 있지 않다면 [nodejs.org](https://nodejs.org/)에서 현재 LTS 버전을 설치한 뒤 VS Code를 다시 열어 주세요.

`npm run build`는 배포용 파일을 `dist`에 생성합니다. 문제은행은 `public/data/bank.json`에 보관합니다. 학습 기록은 브라우저 `localStorage`에 저장합니다.

문제은행은 처음 접속할 때 한 번만 내려받아 브라우저 Cache Storage에 보관합니다. 빌드할 때 `vite.config.ts`가 `bank.json`의 크기(진행률 표시용)와 해시(캐시 갱신 기준)를 넣으므로, 문제은행을 바꾸면 다음 접속 때 새로 받습니다. 내려받는 동안에는 진행률과 공지사항을 보여 줍니다.

연습 모드(회차 연습, 오늘의 10문항, 조건별 학습, 오답 복습)는 시간 제한이 없습니다. 제한시간은 실전 시험(50분)에만 적용합니다. 제출할 때 풀지 않은 문항은 오답 목록에 넣지 않고 미풀이로 남깁니다.

## GitHub Pages 배포

- 서비스 주소: https://sumilee-phd.github.io/NA2-com/
- `main`에 푸시하면 `.github/workflows/deploy.yml`이 설치·빌드·배포를 실행합니다.
- `vite.config.ts`는 GitHub Actions의 저장소 이름으로 기본 경로를 설정합니다. 문제은행도 `import.meta.env.BASE_URL`을 사용합니다.
- `public/data/bank.json`은 반드시 커밋하세요. `node_modules/`와 `dist/`는 커밋하지 않습니다.
- 원본 `CommuteNet-React.zip`은 변경하지 않고 앱 소스와 데이터를 반영했습니다.

배포 경로를 로컬에서 확인하려면 PowerShell에서 다음을 실행합니다.

```powershell
$env:GITHUB_ACTIONS = 'true'
$env:GITHUB_REPOSITORY = 'sumilee-phd/NA2-com'
npm run build
npm run preview
```

`http://127.0.0.1:4173/NA2-com/`에서 문제 표시, 정답·오답 채점, 새로고침 후 오답 기록 유지, 두 번째 접속 때 내려받기 없이 바로 열리는지를 확인합니다. 최초 접속에는 문제 데이터 다운로드가 필요하며, 학습 기록은 사용한 브라우저에 저장됩니다.
