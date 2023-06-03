import React from "react";
import makeStyles from "@mui/styles/makeStyles";

// @mui/icons-material
import Chat from "@mui/icons-material/Chat";
//import VerifiedUser from "@mui/icons-material/Laptop";
import Laptop from "@mui/icons-material/Laptop";
import PsychologyIcon from '@mui/icons-material/Psychology';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
//import Fingerprint from "@mui/icons-material/Fingerprint";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import productStyle from "/styles/jss/nextjs-material-kit-pro/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>我们的学习课程</h2>
          <h5 className={classes.description}>
            我们提供2种服务，一种是全方位课程。这个一般是为期4个月的全方位学习。我们的教程是专门为找工作所量身定制的。
            可以帮您学习计算机算法，机器学习，数据科学类的大量面试考点。针对面试的所有题目题库提供专门的学习内容。
            我们的第二种服务就是mock interview，您可以在这里跟我们的老师定mock interview。我们的面试题目都是根据你
            想面试的公司拿出的真题。
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="软件工程师 SDE"
              description="我们的课程包括基础算法学习 （12章），105道必考leetcode题学习，system design，和behavior 面试准备。"
              icon={Laptop}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="机器学习工程师 MLE"
              description="我们的课程包括面试常见75道算法题学习，机器学习算法，和机器算法case，和不同公司的case interview 解答方案"
              icon={PsychologyIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="数据科学 Data Science"
              description="我们的课程包括Analytics，SQL，统计（statistics）知识学习 还有35道基础算法学习"
              icon={QueryStatsIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
