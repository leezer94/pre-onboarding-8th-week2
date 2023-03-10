# π Kanban Board(Issue Tracking Tool) 

<!-- <p align="middle">
<img src="./screenshot.png" />
</p> -->

## π μ¬μ© λΌμ΄λΈλ¬λ¦¬
---
<div align="center">
  
<img src="https://img.shields.io/badge/Redux-7347B6?style=for-the-badge&logo=Redux&logoColor=white" />
<img src="https://img.shields.io/badge/ReduxToolkit-7347B6?style=for-the-badge&logo=Redux&logoColor=white" />
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  
<br/>
<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" />
</div>

<br>

## πββοΈ μ€νλ°©λ²
----
- μμ‘΄μ± package μ€μΉ
```
npm install
```
- λΈλΌμ°μ  μ€ν
```
npm start
```
- json-server μ€ν
```
npm server
```

<br>

## π‘ μ€κ³ μ λ΅
---
**Component**
* μμμ±μ κ°μ§ μ»΄ν¬λνΈλ λ³κ²½κ³Ό νμ₯μ μ μ°νκ³  μ¬μ¬μ©μ±μ΄ λκ² μ€κ³
* common μ»΄ν¬λνΈλ μ λκ²½λ‘λ₯Ό μ¬μ©ν΄ μ¬μ©μ μ©μ΄νκ² μ€κ³
* νλμ μ»΄ν¬λνΈμμ μ¬μ©μ κ²½νμ΄ λ€λ₯΄λ€λ©΄ λ€λ₯Έ μ»΄ν¬λνΈλ‘ λΆλ¦¬
* μ»΄ν¬λνΈμμ μνν΄μΌ νλ κΈ°λ₯μ Custom HookμΌλ‘ λΆλ¦¬


**Hooks**
* μ¬μ¬μ©μ±μ΄ λκ³  νλμ μ±μκ³Ό μ­ν μ ν  μ μλλ‘ μ€κ³


**Etc**
* μμλ€μ constants μ λ¦¬
* μ΄λ¦μ κ°κ°μ λͺ©μ κ³Ό μ­ν μ μκΈ° μ½κ² μμ±
* eslint, prettier μ¬μ©ν΄ μ½λ μ»¨λ²€μ μ€μ 

<br>

## π Best Practice
---

### 1. Issueμ CRUD κ΅¬ν 

- **κ΅¬ν μ‘°κ±΄**
  * μ΄μμ μνλ "ν  μΌ, μ§ν μ€, μλ£"κ° μ‘΄μ¬νλ©° μΉΈλ°λ³΄λμ κ°μ΄ **μνλ³λ‘ λΆλ₯**λλ€.
  * μ΄μ μνλ³ λͺ©λ‘μ κΈ°λ³Έμ μΌλ‘ κ³ μ λ²νΈ μμλλ‘ **μ€λ¦μ°¨μ** μ λ ¬νλ€.
  * μ΄μλ κ°κ° **κ³ μ λ²νΈ, μ λͺ©, λ΄μ©, λ§κ°μΌ, μν, λ΄λΉμ**κ° μ‘΄μ¬νλ€.
  * μ΄μμ μμ± νΌμμλ **μ λͺ©, λ΄μ©, λ§κ°μΌ, μν, λ΄λΉμ**λ₯Ό μλ ₯ν  μ μλ€.  
    β‘οΈ μΆκ° μ‘°κ±΄: **λ΄λΉμ**λ μ¬μ μ μμμ λͺ©λ‘μ κ΅¬μ±νκ³ , **κ²μ**νμ¬ λ΄λΉμλ₯Ό μ νν  μ μλλ‘ νλ€.
  * κ° μ΄μλ₯Ό ν΄λ¦­ μ **μμΈμ λ³΄ μ°½**μ΄ νμλλ©°, μ λ³΄λ₯Ό **μμ **νκ³  'μ μ₯'λ²νΌμ ν΅ν΄ μ μ₯ν  μ μλλ‘ νλ€.


**Component**

* Modalμ μ¬μ©νμ¬ κ° μ΄μμ 'μμΈμ λ³΄ μ°½'κ³Ό 'μμ± νΌ'μ κ΅¬ν
  * **IssueAddModal.js** μμ Issueλ₯Ό **Create**
  * **IssueDetailModal.js** μμ Issueλ₯Ό **Update**  


```javascript
const Main = () => {
...
  const { ISSUE_LIST, SHOW_ISSUE_DETAIL_FLAG, SHOW_ADD_ISSUE_FLAG } = useSelector(state => state.issue);
...
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : isSuccess ? (
        <>
          <MainWrapper>
            <IssueContainer id="todo" title={'ν  μΌ'} issueList={ISSUE_LIST.TODOS} />
            <IssueContainer id="working" title={'μμ μ€'} issueList={ISSUE_LIST.WORKINGS} />
            <IssueContainer id="complete" title={'μλ£'} issueList={ISSUE_LIST.COMPLETES} />
          </MainWrapper>
          <ShowAddIssue onClick={onClickAddIssueModal}>μ΄μ μΆκ°νκΈ°</ShowAddIssue>
          {SHOW_ISSUE_DETAIL_FLAG && <IssueDetailModal />}
          {SHOW_ADD_ISSUE_FLAG && <IssueAddModal />}
        </>
      ) : null}
    </>
  );
};
```

* μμμ λ΄λΉμλͺ©λ‘μ λ°°μ΄λ‘ λ§λ  ν, filterλ₯Ό μ¬μ©νμ¬ κ²μ κΈ°λ₯μ κ΅¬ν
```javascript
const InputPerson = () => {
...
  const [searchResult, setSearchResult] = useState([]);

  // λ΄λΉμ μ΄λ¦ λ°λ μ λ΄λΉμ κ²μ
  useEffect(() => {
    const filterPerson = PERSON.filter(name => name.includes(person));
    setSearchResult(filterPerson);
  }, [person]);

  return (
    <>
...
        <PersonContainer>
          {searchResult.map(person => (
            <PersonDiv key={person}>{person}</PersonDiv>
          ))}
        </PersonContainer>
      )
    </>
  
};
```

<br>

### 2. Drag & Drop μ΄λ²€νΈλ₯Ό νμ©ν Issueμ μμ λ³κ²½

- κ΅¬ν μ‘°κ±΄
  * μ΄μ λͺ©λ‘μμ λ§μ°μ€μ Drag & Drop μ΄λ²€νΈλ₯Ό νμ©ν΄ μ΄μμ μμλ₯Ό λ³κ²½ν  μ μλ€. 
    * λ³κ²½λ μμλ κ³ μ λ²νΈμ μ λ ¬λ³΄λ€ μ°μ ν΄μ μ μ©λλ€.

**Component**



```javascript

// μ΄μ λ¦¬μ€νΈλ€μ λ΄λ μ»¨νμ΄λ μ»΄ν¬λνΈ
const IssueContainer = ({ id, title, issueList }) => {
  const { DRAG_ISSUE_INFO, DRAG_ENTER_ISSUE_INFO } = useSelector(state => state.issue);
  const [update] = useUpdateTodoMutation();

  // λλκ·Έ λλ μμ­ λ§λ€κΈ°
  const onDragOver = e => {
    e.preventDefault();
  };
  // λλκ·Έ λμ λ
  const onDrop = e => {
    e.preventDefault();

    const dropState = e.currentTarget.closest('article').id;
    console.log(DRAG_ENTER_ISSUE_INFO.id + ' ' + DRAG_ISSUE_INFO.id);
    update({ ...DRAG_ISSUE_INFO, state: dropState, id: DRAG_ENTER_ISSUE_INFO.id });
    update({ ...DRAG_ENTER_ISSUE_INFO, state: dropState, id: DRAG_ISSUE_INFO.id });
  };

  return (
    <Container id={id} onDragOver={onDragOver} onDrop={onDrop}>
      <Title>{title}</Title>
      {issueList.map(issue => (
        <IssueList key={issue.id} issueInfo={issue} />
      ))}
    </Container>
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////

// κ° μ΄μλ₯Ό λ³΄μ¬μ£Όλ μ»΄ν¬λνΈ
const IssueList = ({ issueInfo }) => {
  const dispatch = useDispatch();
  const { id, title, contents, deadline, state, person } = issueInfo;
  const { handleShowDetailIssue } = useIssue();
  const [removeIssue] = useDeleteTodoMutation();

  // ν΄λ¦­ μ μ΄μμ μμΈμ λ³΄λ₯Ό λ³΄μ¬μ€
  const onShowDetail = () => {
    handleShowDetailIssue(id, state);
    dispatch(SET_SHOW_ISSUE_DETAIL_FLAG(true));
  };
  // μ΄μ μ­μ  μ΄λ²€νΈ
  const onRemoveIssue = () => {
    removeIssue(id);
  };

  // λλκ·Έ μμ
  const onDragStart = e => {
    e.dataTransfer.effectAllowed = 'move';
    dispatch(SET_DRAG_ISSUE_INFO(issueInfo));
  };
  // λλκ·Έ κ²ΉμΉ  μ
  const onDragEnter = () => {
    dispatch(SET_DRAG_ENTER_ISSUE_INFO(issueInfo));
  };

  return (
    <ListWrapper>
      <List onDragEnter={onDragEnter} onClick={onShowDetail} onDragStart={onDragStart} draggable>
        <div>κ³ μ λ²νΈ : {id}</div>
        <div>μ λͺ© : {title}</div>
        <div>λ΄μ© : {contents}</div>
        <div>λ§κ°μΌ : {deadline}</div>
        <div>μν : {state}</div>
        <div>λ΄λΉμ : {person}</div>
      </List>
      <RemoveButton onClick={onRemoveIssue}>μ­μ </RemoveButton>
    </ListWrapper>
  );
};

```
**api**

```javascript

// apis ν΄λ apiSlice.jsμ μ½λ
// Issueλ₯Ό 
updateTodo: builder.mutation({
      query: todo => ({
        url: `/issueList/${todo.id}`,
        method: 'PATCH',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),

```

**Logic**  

μΈλ‘λ°©ν₯ κ΅ν
* λλκ·Έ μμ μ μ»΄ν¬λνΈλ₯Ό 1, 1κ³Ό κ²ΉμΉ μ»΄ν¬λνΈλ₯Ό 2λΌκ³  μ§μΉ­
* 1κ³Ό 2λ₯Ό λΉκ΅νμ¬ id κ°μ μ μΈν κ°μ κ΅μ²΄νμ¬ μμ λ³κ²½
  
κ°λ‘λ°©ν₯ κ΅ν
* 1μ΄ λλ‘­ν λΆλͺ¨ μ»΄ν¬λνΈμ idκ°(todo, working, complete)λ₯Ό κ°μ Έμ 1μ μνλ₯Ό patch

<br>

### 3. λ°μ΄ν°κ° λ‘λ© μ€μΌ λ, UXλ₯Ό κ³ λ €ν UI κ΅¬ν

  * λ°μ΄ν°λ₯Ό μ²λ¦¬νλ μ€,
    - RTK Query λ₯Ό μ¬μ©νμ¬ isLoading μμ μ LoadingSpinner μ»΄ν¬λνΈλ₯Ό λ λλ§ ν΄μ€ λ°μ΄ν°κ° λ‘λ©λλ€λ μΈμμ μ μ μκ² μ£Όμ΄ μ΄νλ₯ μ μ€μΌ μ μλ λ°©μμΌλ‘ UX λ₯Ό κ³ λ € νμμ΅λλ€.


**Component**
* κ΅¬νμ νμν common μ»΄ν¬λνΈλ₯Ό μ μ λ° κ΅¬ν

```javascript
return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : isSuccess ? (
        <>
          <MainWrapper>
            <IssueContainer id="todo" title={'ν  μΌ'} issueList={ISSUE_LIST.TODOS} />
            <IssueContainer id="working" title={'μμ μ€'} issueList={ISSUE_LIST.WORKINGS} />
            <IssueContainer id="complete" title={'μλ£'} issueList={ISSUE_LIST.COMPLETES} />
          </MainWrapper>
          <ShowAddIssue onClick={onClickAddIssueModal}>μ΄μ μΆκ°νκΈ°</ShowAddIssue>
          {SHOW_ISSUE_DETAIL_FLAG && <IssueDetailModal />}
          {SHOW_ADD_ISSUE_FLAG && <IssueAddModal />}
        </>
      ) : null}
    </>
  );

```

<br>
