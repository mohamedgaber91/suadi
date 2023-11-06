// import { PageHeader } from '../../components/page-headers';
import Styled from 'styled-components';
import { PageHeader } from './page-headers';

const PageHeaderStyle = Styled(PageHeader)`
  .ant-breadcrumb {
    ol{
      @media (max-width: 575px) {
        justify-content: center;
      }
    }
    li{
        display:flex;
        align-items:center;
    }
  }
`;

const HeaderWrapper = Styled.div`
  
`;

export { PageHeaderStyle, HeaderWrapper };
