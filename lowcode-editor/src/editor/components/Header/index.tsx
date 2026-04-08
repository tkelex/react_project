import { Button, Space } from 'antd';
import { shallow } from 'zustand/shallow';
import { useComponetsStore } from '../../stores/components';
import { PerfPanel } from '../PerfPanel';

export function Header() {

  const { mode, setMode, setCurComponentId } = useComponetsStore((state) => ({
    mode: state.mode,
    setMode: state.setMode,
    setCurComponentId: state.setCurComponentId,
  }), shallow);

  return (
    <div className='w-[100%] h-[100%]'>
      <div className='h-[50px] flex justify-between items-center px-[20px]'>
        <div>低代码编辑器</div>
        <Space>
          <PerfPanel />
          {mode === 'edit' && (
            <Button
                onClick={() => {
                    setMode('preview');
                    setCurComponentId(null);
                }}
                type='primary'
            >
                预览
            </Button>
          )}
          {mode === 'preview' && (
            <Button
              onClick={() => { setMode('edit') }}
              type='primary'
            >
              退出预览
            </Button>
          )}
        </Space>
      </div>
    </div>
  )
}
