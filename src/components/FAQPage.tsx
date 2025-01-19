import React, { useState } from 'react';
import { 
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Collapse,
  ListItemIcon
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import faqData from '../data/faq.json';
// import zpqData from '../data/zpq.json';

const FAQPage: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const questions = faqData.questions;

  const handleQuestionClick = (id: number) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{textAlign: 'center'}}>
        呼吸科住培生入科教育
      </Typography>
      
      <Box display="flex" gap={4}>
        {/* 左侧问题列表 */}
        <Box flex={1}>
          <List component={Paper} elevation={2} sx={{ maxHeight: '600px', overflow: 'auto' }}>
            {questions.map((q) => (
              <React.Fragment key={q.id}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleQuestionClick(q.id)}>
                  <ListItemIcon sx={{ fontSize: 20 }}>🔍</ListItemIcon>
                    <ListItemText primary={q.question} primaryTypographyProps={{
                      fontSize: '1.4rem',
                      fontWeight: 'medium',
                      letterSpacing: 0,
                    }}/>
                    {selectedQuestion === q.id ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>
                <Collapse in={selectedQuestion === q.id} timeout="auto" unmountOnExit>
                  <Box sx={{ p: 2, bgcolor: 'grey.50' }}>
                    <Typography sx={{fontSize: '1.2rem', lineHeight: '2.4rem'}}>{q.answer}</Typography>
                  </Box>
                </Collapse>
              </React.Fragment>
            ))}
          </List>
        </Box>

        {/* 右侧视频播放区域 */}
        <Box flex={1} component={Paper} elevation={2}>
          {selectedQuestion ? (
            <Box
              component="video"
              controls
              sx={{
                width: '100%',
                height: '100%',
                minHeight: '400px',
                bgcolor: 'black'
              }}
              src={questions.find(q => q.id === selectedQuestion)?.videoUrl}
              autoPlay
            />
          ) : (
            <Box
              sx={{
                width: '100%',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'grey.100'
              }}
            >
              <Typography color="text.secondary">
                请选择一个问题查看相关视频
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default FAQPage; 