import React, { FC, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tweets from '@/components/Tweets/Tweets';
// import { ITweets } from '@/components/Tweets/types';
import { Container } from '@mui/material';
import { ITweet } from '@/components/Tweets/types';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export type ITweets = {
  tweets: ITweet[];
  retweets: ITweet[];
  userReplies: ITweet[];
};

const TweetList: FC<ITweets> = ({ tweets, retweets, userReplies }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container disableGutters sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          sx={{
            '& .MuiTabs-flexContainer': {
              display: 'flex',
              flexWrap: 'wrap',
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Tweets(timelines/user)" {...a11yProps(0)} />
          <Tab label="Retweets(timelines/home)" {...a11yProps(1)} />
          <Tab label="Replies(timelines/user-replies)" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Tweets tweets={tweets || []} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tweets tweets={retweets || []} />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Tweets tweets={userReplies || []} />
      </TabPanel>
    </Container>
  );
};

export default TweetList;
