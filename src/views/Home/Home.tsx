import React, { useEffect, useState, useCallback } from "react";
import { getUsers } from "../../service/api";
import { usePagination } from "../../hooks/usePagination";
import { Table } from "../../components/Table/Table";
import * as S from "./styles";

interface ApiUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface HandleUsersArg {
  data: ApiUser[];
}

export function Home() {
  const {
    isFirstPage,
    isLastPage,
    buildPaginationHandler,
    users,
    noStateMessage,
  } = useHome();
  const headers = ["Id", "Email", "Name", "Surname", "Avatar"];
  return (
    <S.Container>
      <S.Header>Users</S.Header>
      <Table
        headers={headers}
        data={addUsersAvatarImg(users)}
        emptyStateMessage={noStateMessage}
      />
      <S.PaginationCtn>
        <S.PaginationBtn
          disabled={isFirstPage}
          onClick={buildPaginationHandler(-1)}
        >
          -
        </S.PaginationBtn>
        <S.PaginationBtn
          disabled={isLastPage}
          onClick={buildPaginationHandler(1)}
        >
          +
        </S.PaginationBtn>
      </S.PaginationCtn>
    </S.Container>
  );
}

function addUsersAvatarImg(apiUsers: ApiUser[]) {
  return apiUsers.map((user) => ({
    ...user,
    avatar: <S.Avatar src={user.avatar} alt={user.first_name} />,
  }));
}

function useHome() {
  const [users, setUsers] = useState([] as ApiUser[]);
  const [noStateMessage, setNoStateMessage] = useState("");
  const [page, buildPaginationHandler] = usePagination(1);

  function handleUsers({ data: users }: HandleUsersArg) {
    if (!users.length) setNoStateMessage("No more users");
    setUsers(users);
  }
  const memoHandleUsers = useCallback(handleUsers, []);

  useEffect(() => {
    getUsers(page).then(memoHandleUsers);
  }, [memoHandleUsers, page]);

  const isFirstPage = page === 1;
  const isLastPage = !users.length;

  return {
    isFirstPage,
    isLastPage,
    users,
    noStateMessage,
    buildPaginationHandler,
  };
}
