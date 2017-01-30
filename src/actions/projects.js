function fetching(id) {
  return { type: 'FETCHING_PROJECT', payload: id }
}

function fetched(project) {
  return { type: 'FETCHED_POST', payload: project }
}

export function fetch(id) {
  return (dispatch, getState) => {
    dispatch(fetching(id))

    return fetch(`http://localhost:8080/projects/${id}`)
      .then(({ data }) => dispatch(fetched(data)))
  }
}
