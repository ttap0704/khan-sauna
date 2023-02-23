import { useState, createContext, useContext } from 'react';

import ModalConfirm from '../components/modal/ModalConfirm';
import ModalAlert from '../components/modal/ModalAlert';

// ========================================================================================
// Type 설정

interface ModalConfirmDataType {
  visible: boolean;
  title: string;
  check_callback: () => void;
  cancel_callback: () => void;
}

interface ModalAlertDataType {
  visible: boolean;
  title: string;
  center: boolean;
  timeout: ReturnType<typeof setTimeout> | undefined;
  callback: () => void;
}

interface ModalNoticeDataType {
  visible: boolean;
  title: string;
  timeout: ReturnType<typeof setTimeout> | undefined;
  callback: () => void;
}

interface ModalControllerType {
  modal_confirm: {
    data: ModalConfirmDataType;
    closeModalConfirm: () => void;
    openModalConfirm: (title: string, check_callback: () => void, cancel_callback?: () => void) => void;
    checkModalConfirm: () => void;
    cancelModalConfirm: () => void;
  };
  modal_alert: {
    data: ModalAlertDataType;
    closeModalAlert: () => void;
    openModalAlert: (title: string, center?: boolean, callback?: () => void) => void;
  };
}

// ========================================================================================
// 초기값 설정
export const ModalContext = createContext<ModalControllerType>({
  modal_confirm: {
    data: {
      visible: false,
      title: '',
      check_callback: () => {
        return;
      },
      cancel_callback: () => {
        return;
      },
    },
    closeModalConfirm: () => {
      return;
    },
    openModalConfirm: (title: string, check_callback: () => void, cancel_callback?: () => void) => {
      return;
    },
    checkModalConfirm: () => {
      return;
    },
    cancelModalConfirm: () => {
      return;
    },
  },
  modal_alert: {
    data: {
      visible: false,
      center: false,
      title: '',
      timeout: undefined,
      callback: () => {
        return;
      },
    },
    closeModalAlert: () => {
      return;
    },
    openModalAlert: (title: string, center?: boolean, callback?: () => void) => {
      return;
    },
  },
});

// ========================================================================================
// Provider 설정

function ModalProvider(props: { children: React.ReactNode }) {
  const children = props.children;

  // modalController 객체 안에 넣으면
  // 실시간 렌더 x
  // useState 사용 바람

  const [modalConfirmData, setModalConfirmData] = useState<ModalConfirmDataType>({
    visible: false,
    title: '',
    check_callback: () => {
      return;
    },
    cancel_callback: () => {
      return;
    },
  });

  const [modalAlertData, setModalAlertData] = useState<ModalAlertDataType>({
    visible: false,
    center: false,
    title: '',
    timeout: undefined,
    callback: () => {
      return;
    },
  });

  // 모달 컨트롤러
  const modalController: ModalControllerType = {
    modal_confirm: {
      data: modalConfirmData,
      closeModalConfirm: () => {
        setModalConfirmData({
          visible: false,
          title: '',
          check_callback: () => {
            return;
          },
          cancel_callback: () => {
            return;
          },
        });
      },
      openModalConfirm: (title: string, check_callback: () => void, cancel_callback?: () => void) => {
        setModalConfirmData(state => {
          return {
            ...state,
            visible: true,
            title: title,
            check_callback,
            cancel_callback: cancel_callback
              ? cancel_callback
              : () => {
                  return;
                },
          };
        });
      },
      checkModalConfirm: () => {
        modalController.modal_confirm.data.check_callback();

        setModalConfirmData(state => {
          return {
            ...state,
            visible: false,
            title: '',
            callback: () => {
              return;
            },
          };
        });
      },
      cancelModalConfirm: () => {
        modalController.modal_confirm.data.cancel_callback();

        setModalConfirmData(state => {
          return {
            ...state,
            visible: false,
            title: '',
            callback: () => {
              return;
            },
          };
        });
      },
    },
    modal_alert: {
      data: modalAlertData,
      closeModalAlert: () => {
        if (modalAlertData.timeout != undefined) {
          clearTimeout(modalAlertData.timeout);
          modalAlertData.callback();
        }
        setModalAlertData({
          visible: false,
          center: false,
          title: '',
          timeout: undefined,
          callback: () => {
            return;
          },
        });
      },
      openModalAlert: (title: string, center?: boolean, callback?: () => void) => {
        setModalAlertData(state => {
          return {
            visible: true,
            title: title,
            center: center ? center : false,
            timeout: setTimeout(() => {
              modalController.modal_alert.closeModalAlert();
              if (callback) callback();
            }, 3000),
            callback: () => {
              callback ? callback() : false;
            },
          };
        });
      },
    },
  };

  return (
    <>
      <ModalContext.Provider value={modalController}>
        {children}
        <ModalConfirm />
        <ModalAlert />
      </ModalContext.Provider>
    </>
  );
}

export default ModalProvider;
