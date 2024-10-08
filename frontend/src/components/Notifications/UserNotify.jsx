import React, { useState, useEffect } from "react";
import IconBoxStyle11 from "../IconBox/IconBoxStyle11";
import Spacing from "../Spacing";
import { useDispatch ,useSelector} from "react-redux";
import { setNotification } from "../../service/redux/reducers/auth/index";

const UserNotify = ({ socket, user_id }) => {
  const { showNotification } = useSelector((state) => {
    return {
      showNotification: state.auth.showNotification,
    };
  });

  const dispatch = useDispatch();
  const [allMesgs, setAllMesgs] = useState([]);

  useEffect(() => {
    socket.on("notification", reciveMsg);
    return () => {
      socket.off("notification", reciveMsg);
    };
  }, [allMesgs]);

  const reciveMsg = (data) => {
    console.log(data);
    setAllMesgs([...allMesgs, data]);
  };
  return (<>
    {showNotification && <>
          <Spacing md="35" lg="35" xl="35" />
          <hr />
          {( allMesgs.length > 0) &&
            allMesgs.map((message, i) => {
              return (
                <>
                  <Spacing md="30" lg="30" xl="30" />
                  <IconBoxStyle11
                    title={message.title}
                    subTitle={message.message}
                    iconSrc="/images/contact/icon_2.svg"
                  />
                </>
              );
            })}
     
   
    </>}
    
    
    </>);
};

export default UserNotify;
