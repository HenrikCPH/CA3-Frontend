function renameMeFacade() {
    let mes = [
        { id: 1, title: "VALUE HERE", info: "INFO"},
        { id: 2, title: "VALUE HERE", info: "INFO"},
        { id: 3, title: "VALUE HERE", info: "INFO"},
        { id: 4, title: "VALUE HERE", info: "INFO"}
      ]

    let nextId = 5;  
    const getMes = () => { return mes}
    const findMe = (id) => {
      const meId = isNaN(id) ? id : Number(id);
      return mes.find(me=>me.id === meId)
    }
    const deleteMe = (id) => {    
      const meId = isNaN(id) ? Number(id) : id;
       mes = mes.filter(me=>me.id!==meId)
    }
    const addMe = (me) => {
      me.id = nextId
      mes.push(me)
      nextId++;
    }
    
    return {
      // Remember all statements below are a shortcut for this version: getMes: getMes
      getMes,
      findMe,
      deleteMe,
      addMe,
    }
    }
    
    let returnVal =  renameMeFacade()
    export default returnVal;