import React, { FC, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tweets from '@/components/tweets/Tweets';
import ReplyList from '@/components/tweets/ReplyList';
import { Alert, CircularProgress, Container } from '@mui/material';
import { IDataTweet } from '@/components/tweets/types';

export type ITweetTabPanel = {
  userData: IDataTweet[];
  userIsLoading: boolean;
  userIsError: boolean;
  userReplies: IDataTweet[];
  userRepliesIsLoading: boolean;
  userRepliesIsError: boolean;
};

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

const TweetTabPanel: FC<ITweetTabPanel> = ({
  userData,
  userIsLoading,
  userIsError,
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
        <Box width='100%' textAlign='center'> {userIsLoading && <CircularProgress sx={{ m: 1 }} />} </Box>
        <Tweets tweets={userData || []} />
        {userIsError && (<Alert severity="error">Ошибка загрузки постов user</Alert>)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box width='100%' textAlign='center'>{userRepliesIsLoading && <CircularProgress sx={{ m: 1 }} />}</Box>
        <ReplyList replies={userReplies || []} />
        {userRepliesIsError && (<Alert severity="error">Ошибка загрузки постов userReplies</Alert>)}
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
