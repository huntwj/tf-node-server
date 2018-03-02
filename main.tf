;;
;; tf-node-server
;;    Provide a node server with simple client-side api
;;

/eval /set TF_NODE_SERVER_DIR=%{TF_NPM_MODULES_ROOT}/tf-node-server
/set TF_NODE_CMD=npx ts-node .

/def node_startServer = \
    /quote -0 -dexec !"cd %{TF_NODE_SERVER_DIR} && %{TF_NODE_CMD} --server"

/def node_sendMessage = \
    /quote -0 -decho !"cd %{TF_NODE_SERVER_DIR} && %{TF_NODE_CMD} %{*}"
