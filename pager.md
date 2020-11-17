# Pager의 원리

## 1. 필요한 변수들 

### 1. page : 사용자에게 전달받을 값(현재 보여야될 페이지)
### 2. listCnt : 관리자, 사용자가 지정한 전달받을 값 (한 페이지에 보여질 리스트 수)
### 3. pagerCnt : 관리자, 사용자에게 전달받을 값 (하나의 페이저 그룹에 나타날 페이지 수)
### 4. totalRecord : 전체 레코드(리스트) 수 ('SELECT count(id) FROM books')
### 5. totalPage : 전체 페이지 수 = Math.ceil(totalRecord / listCnt)
### 6. startIdx : LIMIT startRecord, listCnt = (page - 1) * listCnt
### 7. startPage : Math.floor((page - 1) / listCnt) * pagerCnt + 1 
### 8. endPage : startPage + pagerCnt - 1
### 9. nextPage : .bt-next 클릭시 가야 될 페이지 => page + 1
### 10. prevPage : .bt-prev 클릭시 가야 될 페이지 => page - 1
### 11. nextPager : .bt-pager-next 클릭시 가야 될 페이지 => endPage + 1
### 12. prevPager : .bt-pager-prev 클릭시 가야 될 페이지 => startPage - 1
### 13. firstPage : .bt-first 클리시 가야 될 페이지 => 1
### 14. lastPage : .bt-last 클릭시 가야 될 페이지 => totalPage