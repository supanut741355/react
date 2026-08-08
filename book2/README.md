Steps:
1. Think about **state** -> When list of books change in any way (CRUD) => we need to update content
  - obj look like: { id: number, title: string}
  - books is array of obj: []

  state updated -> Rerender the component it is defined and all the component children
                1. find all the component that need to use this state
                2. Define the state in the lowest common parent