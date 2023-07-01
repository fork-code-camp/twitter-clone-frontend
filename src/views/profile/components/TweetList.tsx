import React, { FC, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tweets from '@/components/tweets/Tweets';
import { Alert, CircularProgress, Container } from '@mui/material';
import { ITweet } from '@/components/tweets/types';

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

export type ITweetList = {
  userData: ITweet[];
  userIsLoading: boolean;
  userIsError: unknown;
  homeData: ITweet[];
  homeIsLoading: boolean;
  homeIsError: unknown;
  userReplies: ITweet[];
  userRepliesIsLoading: boolean;
  userRepliesIsError: unknown;
};

const TweetList: FC<ITweetList> = ({
  userData,
  userIsLoading,
  userIsError,
  homeData,
  homeIsLoading,
  homeIsError,
  userReplies,
  userRepliesIsLoading,
  userRepliesIsError,
}) => {
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
        <Tweets tweets={userData || []} />
        {userIsLoading && <CircularProgress />}
        {userIsError && (
          <Alert severity="error">Ошибка загрузки постов user</Alert>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tweets tweets={homeData || []} />
        {homeIsLoading && <CircularProgress />}
        {homeIsError && (
          <Alert severity="error">Ошибка загрузки постов home</Alert>
        )}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Tweets tweets={userReplies || []} />
        {userRepliesIsLoading && <CircularProgress />}
        {userRepliesIsError && (
          <Alert severity="error">Ошибка загрузки постов userReplies</Alert>
        )}
      </TabPanel>
    </Container>
  );
};

export default TweetList;
