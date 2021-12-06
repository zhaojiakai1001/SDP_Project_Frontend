import { PlusOutlined, HomeOutlined, ContactsOutlined, ClusterOutlined } from '@ant-design/icons';
import { Card, Col, Divider, Input, Row, Tag, Statistic } from 'antd';
import React, { useState, useRef } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { useRequest } from 'umi';
import type { RouteChildrenProps } from 'react-router';
import type { CurrentUser, TagType, tabKeyType } from './data.d';
import { queryCurrent } from './service';
import styles from './Center.less';
import {ajax} from "@/services/ajax";

const { Search } = Input;
// let User = {
//   emp_title: "office manager",
//   emp_length: "2 years",
//   annual_inc: 45000.0,
//   home_ownership: "MORTGAGE",
//   id: 123,
// }
// let userTags = [
//   {key: 0, label: '高收入'},
//   {key: 1, label: '工作稳定'},
//   {key: 2, label: '信用评价良好'},
// ]

// const onSearch = (value: any) =>{
//   console.log(value)
//   // let User = null;
//   const userInfoCallback = (data: any) => {
//     console.log("callback")
//     User = data.data;
//     console.log("user: ", User);
//   };
//   const userTagsCallback = (data: any) => {
//     console.log("callback")
//     const Tags = data.data;
//
//     userTags = [
//       {key: 0, label: Tags.annual_inc.incomeTag},
//       {key: 1, label: Tags.acc_open_past_24mths.Tag},
//       {key: 2, label: Tags.acc_now_delinq.Tag},
//     ]
//     console.log("tags: ", userTags);
//   };
//   const params = {id: value.toString()}
//   ajax("http://localhost:8000/userInfo", params, userInfoCallback)
//   ajax("http://localhost:8000/userTags", params, userTagsCallback)
//
// }



const operationTabList = [
  {
    key: 'loanInfo',
    tab: (
      <span>
        贷款信息
      </span>
    ),
  },
  {
    key: 'applications',
    tab: (
      <span>
        风险评估
      </span>
    ),
  },
  {
    key: 'projects',
    tab: (
      <span>
        详细信息
      </span>
    ),
  },
];

const TagList: React.FC<{ tags: CurrentUser['tags'] }> = ({ tags }) => {
  const ref = useRef<Input | null>(null);
  const [newTags, setNewTags] = useState<TagType[]>([]);
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const showInput = () => {
    setInputVisible(true);
    if (ref.current) {
      // eslint-disable-next-line no-unused-expressions
      ref.current?.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    let tempsTags = [...newTags];
    if (inputValue && tempsTags.filter((tag) => tag.label === inputValue).length === 0) {
      tempsTags = [...tempsTags, { key: `new-${tempsTags.length}`, label: inputValue }];
    }
    setNewTags(tempsTags);
    setInputVisible(false);
    setInputValue('');
  };

  return (
    <div className={styles.tags}>
      <div className={styles.tagsTitle}>标签</div>
      {(tags || []).concat(newTags).map((item) => (
        <Tag key={item.key}>{item.label}</Tag>
      ))}
      {inputVisible && (
        <Input
          ref={ref}
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag onClick={showInput} style={{ borderStyle: 'dashed' }}>
          <PlusOutlined />
        </Tag>
      )}
    </div>
  );
};

const AccountCenter: React.FC<RouteChildrenProps> = () => {

  const [tabKey, setTabKey] = useState<tabKeyType>('loanInfo');

  const [id, setID] = useState(123)

  const [userInfo, setUserInfo] = useState({
    emp_title: "office manager",
    emp_length: "2 years",
    annual_inc: 45000.0,
    home_ownership: "MORTGAGE",
  })

  const [tagInfo, setTagInfo] = useState({
    annual_inc: {
      annual_inc: 26280.0,
      incomeTag: "低收入",
      rank: 0.0463
    },
    acc_open_past_24mths: {
      acc_open_past_24mths: 0.0,
      Tag: "交易数量少"
    },
    acc_now_delinq: {
      acc_now_delinq: 0.0,
      Tag: "无逾期账户"
    },
    chargeoff_within_12_mths: {
      chargeoff_within_12_mths: 0.0,
      Tag: "少"
    },
    home_ownership: "OWN",
    addr_state: "NJ",
    all_util: 41.0,
    delinq_2yrs: 0.0,
    delinq_amnt: 0.0,
    dti: 29.04,
    emp_title: "NaN",
    loan_status: "Current",
    pct_tl_nvr_dlq: 50.0,
    pub_rec: 0.0,
    revol_bal: 900.0,
    hardship_flag: "N",
    disbursement_method: "Cash"
  })

  const [userTags, setUserTags] = useState([
    {key: 0, label: '高收入'},
    {key: 1, label: '工作稳定'},
    {key: 2, label: '信用评价良好'},
  ])

  const [loanInfo, setLoanInfo] = useState({
    delinq_2yrs: 0.0,
    pub_rec: 0.0,
    all_util: 98.0,
    revol_bal: 23190.0,
    dti: 33.82,
    delinq_amnt: 0.0,
    acc_now_delinq: 0.0,
    loan_status: "Current"
  })

  const [svmRiskInfo, setSVMRiskInfo] = useState({
    risk: 0
  })

  const [mlpRiskInfo, setMLPRiskInfo] = useState({
    risk: 0
  })

  const [logisticRiskInfo, setLogisticRiskInfo] = useState({
    risk: 0
  })

  //  获取用户信息
  const { data: currentUser, loading } = useRequest(() => {
    return queryCurrent();
  });

  const onSearch = (value: any) =>{
    console.log(value)
    setID(value)
    // let User = null;
    const userInfoCallback = (data: any) => {
      console.log("callback")
      setUserInfo(data.data);
      // console.log("user: ", User);
    };
    const userTagsCallback = (data: any) => {
      console.log("callback")
      const Tags = data.data;

      setTagInfo(Tags)

      setUserTags([
        {key: 0, label: Tags.annual_inc.incomeTag},
        {key: 1, label: Tags.acc_open_past_24mths.Tag},
        {key: 2, label: Tags.acc_now_delinq.Tag},
      ])
      // console.log("tags: ", userTags);
    };
    const loanInfoCallback = (data: any) => {
      setLoanInfo(data.data)
    }
    const  svmRiskInfoCallback = (data: any) => {
      setSVMRiskInfo(data)
    }
    const mlpRiskInfoCallback = (data: any) => {
      setMLPRiskInfo(data)
    }
    const logisticRiskInfoCallback = (data: any) => {
      setLogisticRiskInfo(data)
    }
    const params = {id: value.toString()}
    ajax("http://127.0.0.1:8000/userInfo", params, userInfoCallback)
    ajax("http://127.0.0.1:8000/userTags", params, userTagsCallback)
    ajax("http://127.0.0.1:8000/loanDefault", params, loanInfoCallback)
    ajax("http://127.0.0.1:8000/personal/svm_predict", params, svmRiskInfoCallback)
    ajax("http://127.0.0.1:8000/personal/mlp_predict", params, mlpRiskInfoCallback)
    ajax("http://127.0.0.1:8000/personal/logistic_predict", params, logisticRiskInfoCallback)
  }

  //  渲染用户信息
  const renderUserInfo = () => {
    return (
      <div className={styles.detail}>
        <p>
          <ContactsOutlined
            style={{
              marginRight: 8,
            }}
          />
          用户
          {id}
        </p>
        <p>
          <ClusterOutlined
            style={{
              marginRight: 8,
            }}
          />
          {userInfo.annual_inc}
        </p>
        <p>
          <HomeOutlined
            style={{
              marginRight: 8,
            }}
          />
          {userInfo.emp_title}
        </p>
      </div>
    );
  };

  // 渲染tab切换
  const renderChildrenByTabKey = (tabValue: tabKeyType) => {
    if (tabValue === 'applications') {
      //return <Projects />;
      return (
        <div>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="SVM风险预测"
                         value={svmRiskInfo.risk === 0 ? "违约风险低" : "违约风险高" }
                         valueStyle={svmRiskInfo.risk === 0 ? { color: '#00ee00' } : { color: '#cf1322' } } />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="MLP风险预测"
                         value={mlpRiskInfo.risk === 0 ? "违约风险低" : "违约风险高" }
                         valueStyle={mlpRiskInfo.risk === 0 ? { color: '#00ee00' } : { color: '#cf1322' } } />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="逻辑回归风险预测"
                         value={logisticRiskInfo.risk === 0 ? "违约风险低" : "违约风险高" }
                         valueStyle={logisticRiskInfo.risk === 0 ? { color: '#00ee00' } : { color: '#cf1322' } } />
            </Col>
          </Row>
        </div>
      )
    }
    if (tabValue === 'projects') {
      // return <Applications />;
      return (
        <div>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="年收入" value={"$" + tagInfo.annual_inc.annual_inc} suffix={"占前" +  (100 - tagInfo.annual_inc.rank * 100).toFixed(2) + "%"} />
            </Col>
            <Col span={12}>
              <Statistic title="房屋所有权" value={tagInfo.home_ownership} />
            </Col>
          </Row>
          <Divider/>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="居住地所在州" value={tagInfo.addr_state}  />
            </Col>
            <Col span={12}>
              <Statistic title="是否贫困" value={tagInfo.hardship_flag === "N" ? "否" : "是"}
                         valueStyle={tagInfo.hardship_flag === "N" ? { color: '#00ee00' } : { color: '#cf1322' } } />
            </Col>
          </Row>
          <Divider/>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="两年内开户数量" value={tagInfo.acc_open_past_24mths.acc_open_past_24mths} />
            </Col>
            <Col span={12}>
              <Statistic title="逾期账户数量" value={tagInfo.acc_now_delinq.acc_now_delinq} />
            </Col>
          </Row>
          <Divider/>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="总负债金额" value={tagInfo.all_util} />
            </Col>
            <Col span={12}>
              <Statistic title="支付方式" value={tagInfo.disbursement_method} />
            </Col>
          </Row>
        </div>
      )
    }
    // if (tabValue === 'articles') {
    //   return <Articles />;
    // }
    if (tabValue === 'loanInfo') {
      return (
        <div>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="借款状态" value={loanInfo.loan_status}  />
            </Col>
            <Col span={12}>
              <Statistic title="尚未结清金额" value={loanInfo.revol_bal} valueStyle={{ color: '#cf1322' }} prefix={"$"} />
            </Col>
          </Row>
          <Divider/>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="负债比" value={loanInfo.dti}  />
            </Col>
            <Col span={12}>
              <Statistic title="总负债金额" value={loanInfo.all_util} valueStyle={{ color: '#cf1322' }} prefix={"$"} />
            </Col>
          </Row>
          <Divider/>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="公开贬损记录次数" value={loanInfo.pub_rec} valueStyle={{ color: '#00ee00' }} />
            </Col>
            <Col span={12}>
              <Statistic title="过去两年逾期30天以上次数" value={loanInfo.delinq_2yrs} valueStyle={{ color: '#00ee00' }} />
            </Col>
          </Row>
          <Divider/>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="正在拖欠的账户逾期欠款" value={loanInfo.delinq_amnt} valueStyle={{ color: '#00ee00' }} />
            </Col>
            <Col span={12}>
              <Statistic title="正在拖欠的账户数量" value={loanInfo.acc_now_delinq} valueStyle={{ color: '#00ee00' }} />
            </Col>
          </Row>
        </div>

      )
    }
    return null;
  };

  return (
    <GridContent>
      <Row>
        <Search placeholder="input search text" onSearch={onSearch} style={{width: 350}}/>
      </Row>
      <Row gutter={24}>
        <Col lg={7} md={24}>
          <Card bordered={false} style={{marginBottom: 24}} loading={loading}>
            {!loading && currentUser && (
              <div>
                <div className={styles.avatarHolder}>
                  <img alt="" src={currentUser.avatar}/>
                  <div className={styles.name}>{currentUser.name}</div>
                  <div>{currentUser?.signature}</div>
                </div>
                {renderUserInfo()}
                <Divider dashed/>
                <TagList tags={userTags || []}/>
                <Divider style={{marginTop: 16}} dashed/>
                {/*<div className={styles.team}>*/}
                {/*  <div className={styles.teamTitle}>团队</div>*/}
                {/*  <Row gutter={36}>*/}
                {/*    {currentUser.notice &&*/}
                {/*      currentUser.notice.map((item) => (*/}
                {/*        <Col key={item.id} lg={24} xl={12}>*/}
                {/*          <Link to={item.href}>*/}
                {/*            <Avatar size="small" src={item.logo} />*/}
                {/*            {item.member}*/}
                {/*          </Link>*/}
                {/*        </Col>*/}
                {/*      ))}*/}
                {/*  </Row>*/}
                {/*</div>*/}
              </div>
            )}
          </Card>
        </Col>
        <Col lg={17} md={24}>
          <Card
            className={styles.tabsCard}
            //bordered={faljse}
            tabList={operationTabList}
            activeTabKey={tabKey}
            onTabChange={(_tabKey: string) => {
              setTabKey(_tabKey as tabKeyType);
            }}
          >
            {renderChildrenByTabKey(tabKey)}
          </Card>
        </Col>
      </Row>
    </GridContent>
  );

};
export default AccountCenter;
