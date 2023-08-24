import React, { FC, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tweets from '@/components/tweets/Tweets';
import ReplyList from '@/components/tweets/ReplyList';
import { Alert, CircularProgress, Container } from '@mui/material';
import { useGetUserTweetsQuery, useGetTweetUserRepliesQuery } from '@/query/timeline/tweetTimeline.query';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `tweet-tab-${index}`,
    'aria-controls': `tweet-tabpanel-${index}`,
  };
};

const TweetTabPanel: FC = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { data: userTweetsData, isLoading: userTweetsIsLoading, isError: userTweetsIsError, } = useGetUserTweetsQuery({ page: 0, size: 100 });
  const { data: userRepliesData, isLoading: userRepliesIsLoading, isError: userRepliesIsError, } = useGetTweetUserRepliesQuery();

  return (
    <Container disableGutters sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          sx={{
            '& .MuiTabs-flexContainer': {
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }
          }}
          value={value}
          onChange={handleChange}
          aria-label="tabs"
        >
          <Tab label="Tweets" {...a11yProps(0)} />
          <Tab label="Replies" {...a11yProps(1)} />
          <Tab label="Highlights" {...a11yProps(2)} />
          <Tab label="Media" {...a11yProps(3)} />
          <Tab label="Likes" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box width='100%' textAlign='center'> {userTweetsIsLoading && <CircularProgress sx={{ m: 1 }} />} </Box>
        <Tweets tweets={userTweetsData || []} />
        {userTweetsIsError && (<Alert severity="error">Ошибка загрузки постов user</Alert>)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box width='100%' textAlign='center'>{userRepliesIsLoading && <CircularProgress sx={{ m: 1 }} />}</Box>
        <ReplyList replies={userRepliesData || []} />
        {userRepliesIsError && (<Alert severity="error">Ошибка загрузки постов userRepliesData</Alert>)}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Highlights
      </TabPanel>
      <TabPanel value={value} index={3}>
        Media
      </TabPanel>
      <TabPanel value={value} index={4}>
        Likes
      </TabPanel>
    </Container>
  );
};

export default TweetTabPanel;
